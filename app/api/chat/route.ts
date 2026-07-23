import { NextResponse } from "next/server";
import { openrouter } from "@/lib/openrouter";
import type { ChatRequest } from "../../../types/chat";

export async function POST(req: Request) {
  try {
    const body: ChatRequest = await req.json();

    const completion = await openrouter.chat.completions.create({
      model: "deepseek/deepseek-r1",
      messages: [
        {
          role: "system",
          content: `
Bạn là LEFICA AI.

Bạn là chuyên gia chăm sóc da.

Chỉ tư vấn:

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

Nếu chưa đủ thông tin thì hỏi thêm.

Nếu khách muốn đặt lịch hãy giới thiệu:

https://zalo.me/84348393333

Luôn trả lời ngắn gọn.

Lịch sự.

Tự nhiên như nhân viên spa.
`,
        },

        ...body.messages,
      ],
    });

    return NextResponse.json({
      reply:
        completion.choices[0].message.content ??
        "Em chưa có câu trả lời.",
    });

  } catch (error: any) {

    console.error("========== OPENROUTER ==========");
    console.error(error);

    return NextResponse.json({
      reply:
        error?.message ??
        "AI đang bận.",
    });

  }
}
