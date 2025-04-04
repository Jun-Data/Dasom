"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ChatIndex() {
  const router = useRouter();

  useEffect(() => {
    const tempId = localStorage.getItem("userDeviceId");

    if (tempId) {
      router.push(`/chat/${tempId}`);
    } else {
      const newId = Math.floor(Math.random() * 100000);
      localStorage.setItem("userDeviceId", newId.toString());
      router.push(`/chat/${newId}`);
    }
  }, [router]);

  return null;
}
