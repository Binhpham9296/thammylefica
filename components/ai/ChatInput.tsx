type Props = {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
}: Props) {
  return (
    <div className="border-t p-4 flex gap-3">
      <textarea
        value={value}
        rows={2}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 border rounded-xl p-3 resize-none"
        placeholder="Nhập câu hỏi..."
      />

      <button
        onClick={onSend}
        className="bg-blue-600 text-white px-6 rounded-xl"
      >
        Gửi
      </button>
    </div>
  );
}