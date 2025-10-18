"use client";
import { useEffect, useState } from "react";

export default function HideOnScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      const fromBottom = docHeight - (scrollY + viewportHeight);

      // Hide when within 100px from top or bottom
      if (scrollY < 100 || fromBottom < 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}
