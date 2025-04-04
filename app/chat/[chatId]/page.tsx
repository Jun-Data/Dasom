"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
      SpeechRecognition: any;
      webkitSpeechRecognition: any;
    }
}

export default function ChatIntro() {
  const router = useRouter();
  const [inputMode, setInputMode] = useState<"voice" | "text">("voice");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false); // 모달 제어 상태
  const chatRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tempId = localStorage.getItem("userDeviceId");
//     if (!tempId) {
//       const newId = Math.floor(Math.random() * 100000);
//       localStorage.setItem("userDeviceId", newId.toString());
//     }
//   }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const handleVoiceInput = () => {
    const SpeechRecognition =
      typeof window !== "undefined" && (window.SpeechRecognition || window.webkitSpeechRecognition);

    if (!SpeechRecognition) {
      alert("이 브라우저는 음성 인식을 지원하지 않아요.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR";
    recognition.start();

    setIsListening(true); // 모달 띄우기

    recognition.onresult = async (event: any) => {
      const text = event.results[0][0].transcript;
      setMessages((prev) => [...prev, { sender: "user", text }]);
      setIsSpeaking(true);
      setIsListening(false); // 모달 닫기
      await fetchBotReply(text);
    };

    recognition.onend = () => {
      setIsListening(false); // 사용자가 멈췄을 경우도 모달 닫기
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const text = input;
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInput("");
    setIsSpeaking(true);
    await fetchBotReply(text);
  };

  const fetchBotReply = async (text: string) => {
    // const userDeviceId = localStorage.getItem("userDeviceId");
    try {
      const response = await fetch(`http://j12a704.p.ssafy.io:8080/api/chat/1`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.message }]);
    } catch (error) {
      console.error("Bot reply fetch error:", error);
    } finally {
      setIsSpeaking(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-indigo-100 via-white to-white pt-[12vh] pb-12">
      {/* 모달 */}
      {isListening && (
        <div className="fixed inset-0 bg-opacity-40 z-50 flex justify-center items-center">
          <div className="bg-white rounded-xl p-6 shadow-xl text-center max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">🎤 음성 인식 중</h2>
            <p className="text-gray-600 text-sm">말씀을 멈추면 자동으로 인식이 종료됩니다.</p>
          </div>
        </div>
      )}

      {/* 캐릭터 */}
      <div className="flex flex-col items-center">
        <Image
          src={isSpeaking ? "/images/chatrobot_speaking.gif" : "/images/chatbot.png"}
          alt="Dasom bot"
          width={200}
          height={200}
        />
        <p className="text-gray-500 mt-6">환영합니다!</p>
        <h2 className="text-2xl font-bold mt-2">무엇을 도와드릴까요?</h2>
      </div>

      {/* 채팅 영역 */}
      <div
        ref={chatRef}
        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-y-auto bg-white rounded-xl shadow-inner p-4 mt-6 mb-7"
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 px-4 py-2 rounded-full w-fit max-w-[80%] text-sm ${
              msg.sender === "user" ? "ml-auto bg-purple-400 text-white" : "mr-auto bg-sky-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* 입력창 (텍스트 모드일 때만) */}
      {inputMode === "text" && (
        <div className="flex gap-2 items-center max-w-md w-full px-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="메시지를 입력하세요"
            className="flex-1 border px-4 py-2 rounded-full text-black"
          />
          <button
            onClick={handleSend}
            className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600"
          >
            전송
          </button>
        </div>
      )}

      {/* 입력 모드 버튼들 */}
      <div className="mt-6 flex flex-col items-center gap-4">
        <div className="flex gap-4">
          <button
            onClick={() => {
              setInputMode("voice");
              handleVoiceInput();
            }}
            className={`p-4 rounded-full text-xl transition-colors duration-200 ${
              inputMode === "voice"
                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            🎤
          </button>
          <button
            onClick={() => setInputMode("text")}
            className={`p-4 rounded-full text-xl transition-colors duration-200 ${
              inputMode === "text"
                ? "bg-indigo-500 text-white hover:bg-indigo-600"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            ⌨️
          </button>
        </div>
      </div>
    </div>
  );
}
