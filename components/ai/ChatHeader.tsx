"use client";

interface Props {
  onClose: () => void;
  onMinimize?: () => void;
}

export default function ChatHeader({
  onClose,
  onMinimize,
}: Props) {
  return (
    <div
      className="
      h-20
      rounded-t-3xl
      bg-gradient-to-r
      from-[#0068FF]
      to-[#0095FF]
      text-white
      px-5
      flex
      items-center
      justify-between
      shadow-lg
      select-none
      "
    >
      {/* Avatar */}

      <div className="flex items-center gap-3">

        <div className="relative">

          <img
            src="/images/lefica-chat.png"
            alt="LEFICA"
            className="
            w-12
            h-12
            rounded-full
            border-2
            border-white
            object-cover
            "
          />

          <span
            className="
            absolute
            bottom-0
            right-0
            w-3.5
            h-3.5
            rounded-full
            bg-green-400
            border-2
            border-white
            animate-pulse
            "
          />

        </div>

        <div>

          <h2
            className="
            font-bold
            text-lg
            "
          >
            LEFICA AI
          </h2>

          <p
            className="
            text-sm
            opacity-90
            "
          >
            🟢 Đang online
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex items-center gap-2">

        {onMinimize && (
          <button
            onClick={onMinimize}
            className="
            w-9
            h-9
            rounded-full
            hover:bg-white/20
            duration-200
            text-xl
            "
          >
            −
          </button>
        )}

        <button
          onClick={onClose}
          className="
          w-9
          h-9
          rounded-full
          hover:bg-red-500
          duration-200
          text-xl
          "
        >
          ✕

        </button>

      </div>

    </div>
  );
}