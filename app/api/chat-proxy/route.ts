export async function POST(req: Request) {
    const body = await req.json();
  
    const response = await fetch("http://j12a704.p.ssafy.io:8080/api/chat/1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  }
  