"use client";

import React from "react";

const GoogleDriveEmbed = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-white">
      <div className="w-full h-full max-w-6xl mx-auto">
        <iframe
          src="https://drive.google.com/embeddedfolderview?id=1J-mlrtB3UP3Z8LZgsYhHi8emspabFRWX#list"
          className="w-full h-full mx-auto"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleDriveEmbed;
