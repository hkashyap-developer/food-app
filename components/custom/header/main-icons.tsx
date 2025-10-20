// components/custom/main-icons/MainIcons.tsx
import React from "react";
import { FaPhone, FaWhatsapp, FaQrcode } from "react-icons/fa";
import { GiTalk } from "react-icons/gi"; // Arattai / chat

const MainIcons: React.FC = () => {
  return (
    <div className="flex gap-6">
      <a
        href="/qr-code"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-700"
      >
        <FaQrcode size={28} />
      </a>
    </div>
  );
};

export default MainIcons;
