"use client";

import { useState } from "react";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import Typing from "./Typing";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Xin chào 🌸\n\nEm là AI tư vấn của LEFICA.\n\nEm có thể tư vấn:\n• Tẩy lông\n• Trị mụn\n• Trị nám\n• Xóa xăm\n• Chăm sóc da",
    },
  ]);

  async function send() {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      {
        role: "user" as const,
        content: input,
      },
    ];

    setMessages(newMessages);

    setInput("");

    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        messages: newMessages,
      }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      {
        role: "assistant",
        content: data.reply,
      },
    ]);

    setLoading(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-blue-600 text-white shadow-2xl text-3xl z-50"
      >
        💬
      </button>

      {open && (
        <div className="fixed bottom-28 right-6 w-[390px] h-[650px] bg-white rounded-3xl shadow-2xl overflow-hidden border z-50">

          <div className="bg-blue-600 text-white p-5">
            <h2 className="font-bold text-xl">
              LEFICA AI
            </h2>

            <p className="text-sm opacity-90">
              Chuyên gia chăm sóc da
            </p>
          </div>

          <div className="h-[480px] overflow-y-auto p-4">

            {messages.map((m, i) => (
              <ChatBubble
                key={i}
                role={m.role}
                content={m.content}
              />
            ))}

            {loading && <Typing />}
          </div>

          <ChatInput
            value={input}
            onChange={setInput}
            onSend={send}
          />

        </div>
      )}
    </>
  );
}