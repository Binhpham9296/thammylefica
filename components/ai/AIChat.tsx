"use client";

import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatHeader from "./ChatHeader";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const [input, setInput] = useState("");

  async function send() {
    if (!input.trim()) return;

    const user: Message = {
      role: "user",
      content: input,
    };

    const history = [...messages, user];

    setMessages(history);

    setInput("");

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: history,
        }),
      });

      const json = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: json.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Xin lỗi Anh/Chị, em đang bận một chút.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <>
      <ChatButton
        onClick={() => setOpen(true)}
      />

      {open && (
        <div
          className="
          fixed
          bottom-24
          right-5
          w-[390px]
          h-[650px]
          rounded-3xl
          bg-white
          shadow-2xl
          border
          overflow-hidden
          z-[99999]
          flex
          flex-col
          "
        >
          <ChatHeader
            onClose={() => setOpen(false)}
          />

          <div
            className="
            flex-1
            overflow-y-auto
            p-5
            bg-[#F5F7FB]
            space-y-3
            "
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    m.role === "user"
                      ? "bg-[#0068FF] text-white rounded-2xl rounded-br-md px-4 py-3 max-w-[80%]"
                      : "bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow max-w-[80%]"
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-sm text-gray-500">
                LEFICA đang trả lời...
              </div>
            )}
          </div>

          <div className="border-t p-4 bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) =>
                  setInput(e.target.value)
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    send();
                  }
                }}
                placeholder="Nhập nội dung..."
                className="
                flex-1
                border
                rounded-xl
                px-4
                py-3
                outline-none
                "
              />

              <button
                onClick={send}
                className="
                bg-[#0068FF]
                text-white
                rounded-xl
                px-5
                hover:opacity-90
                "
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}