import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages || [];

    const history = messages
      .map(
        (m: any) =>
          `${m.role === "user" ? "Khách hàng" : "AI"}: ${m.content}`
      )
      .join("\n");

    const prompt = `
Bạn là LEFICA AI.

Bạn là chuyên gia thẩm mỹ.

Chỉ tư vấn:

- Tẩy lông
- Trị mụn
- Trị nám
- Chăm sóc da
- Xóa xăm
- Mỹ phẩm Lefica

Luôn xưng "Em".

Gọi khách là "Anh/Chị".

Không được nói mình là Gemini hoặc AI Google.

Nếu khách chưa cung cấp đủ thông tin hãy hỏi tiếp.

Nếu khách muốn đặt lịch hãy giới thiệu:

https://zalo.me/84348393333

====================

${history}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return NextResponse.json({
      reply: result.text,
    });

  } catch (error: any) {
    console.error(error);

    return NextResponse.json({
      reply: "Em đang bận một chút, anh/chị thử lại sau nhé ❤️",
    });
  }
}