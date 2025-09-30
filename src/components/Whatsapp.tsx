import React from "react";

const Whatsapp = () => {
  return (
    <a
      href="https://wa.me/905303030498"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-green-500">
        {/* Radar effect */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-50 animate-pulse"></span>

        {/* WhatsApp icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8 relative z-10"
        />
      </div>
    </a>
  );
};

export default Whatsapp;