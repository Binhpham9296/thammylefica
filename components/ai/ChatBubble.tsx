type Props = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatBubble({ role, content }: Props) {
  const user = role === "user";

  return (
    <div className={`flex ${user ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 whitespace-pre-wrap ${
          user
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {content}
      </div>
    </div>
  );
}