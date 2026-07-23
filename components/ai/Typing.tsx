export default function Typing() {
  return (
    <div className="flex gap-1 p-3">
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]"></span>
      <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]"></span>
    </div>
  );
}