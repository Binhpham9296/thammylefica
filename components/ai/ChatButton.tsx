"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  onClick: () => void;
}

export default function ChatButton({ onClick }: Props) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [dragging, setDragging] = useState(false);

  const moved = useRef(false);

  const offset = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const saved = localStorage.getItem(
      "lefica-chat-position"
    );

    if (saved) {
      setPosition(JSON.parse(saved));
    } else {
      setPosition({
        x: window.innerWidth - 90,
        y: window.innerHeight - 120,
      });
    }
  }, []);

  useEffect(() => {
    function move(e: MouseEvent) {
      if (!dragging) return;

      moved.current = true;

      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    }

    function up() {
      if (!dragging) return;

      setDragging(false);

      const finalX =
        position.x < window.innerWidth / 2
          ? 15
          : window.innerWidth - 80;

      const finalY = Math.max(
        20,
        Math.min(
          position.y,
          window.innerHeight - 90
        )
      );

      const p = {
        x: finalX,
        y: finalY,
      };

      setPosition(p);

      localStorage.setItem(
        "lefica-chat-position",
        JSON.stringify(p)
      );
    }

    window.addEventListener("mousemove", move);

    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );

      window.removeEventListener(
        "mouseup",
        up
      );
    };
  }, [dragging, position]);

  return (
    <button
      style={{
        left: position.x,
        top: position.y,
        position: "fixed",
        transition: dragging
          ? "none"
          : "all .2s",
      }}
      className="
      z-[999999]
      w-16
      h-16
      rounded-full
      shadow-2xl
      overflow-hidden
      cursor-grab
      active:cursor-grabbing
      hover:scale-110
      active:scale-95
      duration-200
      "
      onMouseDown={(e) => {
        moved.current = false;

        setDragging(true);

        offset.current = {
          x: e.clientX - position.x,
          y: e.clientY - position.y,
        };
      }}
      onClick={() => {
        if (!moved.current) {
          onClick();
        }
      }}
    >
      <img
        src="/images/lefica-chat.png"
        className="
        w-full
        h-full
        object-cover
        "
        alt=""
      />

      <span
        className="
        absolute
        bottom-1
        right-1
        w-4
        h-4
        rounded-full
        bg-green-500
        border-2
        border-white
        animate-pulse
        "
      />
    </button>
  );
}