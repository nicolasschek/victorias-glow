import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { Badge } from "./ui/badge";

interface CartButtonProps {
  onClick: () => void;
}

export function CartButton({ onClick }: CartButtonProps) {
  const { getTotalItems, justAdded } = useCart();
  const totalItems = getTotalItems();

  // No mostrar el botón si el carrito está vacío
  if (totalItems === 0) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-[9rem] sm:bottom-[8.5rem] right-5 z-40 bg-[#C85A7C] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-w-[48px] min-h-[48px] flex items-center justify-center animate-fade-in ${
        justAdded ? 'animate-bounce-once' : ''
      }`}
      aria-label={`Ver carrito - ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`}
    >
      <div className="relative">
        <ShoppingCart size={22} aria-hidden="true" />
        <Badge 
          className="absolute -top-2 -right-2 bg-white text-[#C85A7C] hover:bg-white min-w-[18px] h-[18px] flex items-center justify-center p-0.5 text-xs border-2 border-[#C85A7C]"
          aria-label={`${totalItems} productos en el carrito`}
        >
          {totalItems}
        </Badge>
      </div>
      
      {/* Tooltip - solo en desktop */}
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#C85A7C] animate-slow-ping opacity-20" />
    </button>
  );
}
