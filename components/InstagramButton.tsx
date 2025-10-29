import { Instagram } from "lucide-react";

export function InstagramButton() {
  const handleClick = () => {
    window.open(
      "https://www.instagram.com/victoriasglow.byagus",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-[4.5rem] right-5 z-40 bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
      aria-label="Seguinos en Instagram"
    >
      <Instagram size={22} className="group-hover:animate-pulse" aria-hidden="true" />
      
      {/* Tooltip - solo en desktop */}
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Seguinos en Instagram
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#E1306C] animate-slow-ping opacity-20" style={{ animationDelay: '1s' }} />
    </button>
  );
}
