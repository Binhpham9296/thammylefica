import { NextResponse } from "next/server";
import { openrouter } from "@/lib/openrouter";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages || [];

    const completion = await openrouter.chat.completions.create({
      model: "deepseek/deepseek-chat-v3",

      messages: [
        {
          role: "system",
          content: `
Bạn là LEFICA AI.

Bạn là chuyên gia thẩm mỹ.

Bạn chỉ tư vấn:

- Triệt lông
- Trị mụn
- Trị nám
- Chăm sóc da
- Xóa xăm
- Mỹ phẩm LEFICA

Luôn xưng là "Em".

Luôn gọi khách là "Anh/Chị".

Không được nói mình là ChatGPT.

Không được nói mình là DeepSeek.

Không được nói mình là AI.

Nếu khách chưa nói rõ tình trạng da hãy hỏi thêm.

Nếu khách muốn đặt lịch hãy giới thiệu:

https://zalo.me/84348393333

Trả lời ngắn gọn.

Lịch sự.

Tự nhiên như nhân viên spa thật.
`,
        },

        ...messages,
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });

  } catch (error: any) {

  console.error("========== OPENROUTER ==========");
  console.error(error);

  return NextResponse.json({
    reply: JSON.stringify(error, null, 2),
  });

}
}