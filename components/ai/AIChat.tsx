// components/ai/AIChat.tsx
'use client';

import { useState } from 'react';

export default function AIChat() {
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = async () => {
    if (!input.trim()) return;

    // Thêm tin nhắn user
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      // Kiểm tra response
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Lỗi không xác định');
      }

      // Đọc stream
      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      
      if (!reader) {
        throw new Error('Không thể đọc stream');
      }

      // Thêm tin nhắn assistant trống
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      let assistantReply = '';

      // Đọc từng chunk
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        assistantReply += chunk;

        // Cập nhật tin nhắn assistant
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1] = {
            role: 'assistant',
            content: assistantReply,
          };
          return newMessages;
        });
      }

    } catch (error: any) {
      console.error('Send message error:', error);
      setMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: `Xin lỗi, em gặp lỗi: ${error.message || 'Không xác định'}. Anh/Chị thử lại nhé!` 
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] max-w-2xl mx-auto border rounded-lg">
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg ${
              msg.role === 'user' 
                ? 'bg-blue-500 text-white ml-auto max-w-[80%]' 
                : 'bg-gray-200 text-gray-800 mr-auto max-w-[80%]'
            }`}
          >
            {msg.content || '...'}
          </div>
        ))}
        {loading && (
          <div className="bg-gray-200 text-gray-800 p-3 rounded-lg mr-auto">
            <span className="animate-pulse">...</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Nhập tin nhắn..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Đang gửi...' : 'Gửi'}
          </button>
        </div>
      </div>
    </div>
  );
}