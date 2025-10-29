import { useCart } from "./CartContext";

function WhatsAppIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle with tail */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C8.268 2 2 8.268 2 16c0 2.524.667 4.893 1.834 6.939L2.5 28.5l5.561-1.334A13.936 13.936 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 2.4c6.409 0 11.6 5.191 11.6 11.6 0 6.409-5.191 11.6-11.6 11.6a11.563 11.563 0 01-5.881-1.634l-.442-.263-3.234.776.776-3.234-.263-.442A11.563 11.563 0 014.4 16c0-6.409 5.191-11.6 11.6-11.6z"
        fill="currentColor"
      />
      {/* Phone handset */}
      <path
        d="M23.296 19.176c-.396-.198-2.344-1.156-2.707-1.289-.363-.132-.628-.198-.893.198-.264.396-1.023 1.289-1.254 1.553-.231.264-.462.297-.858.099-.396-.198-1.674-.617-3.187-1.967-1.178-1.051-1.973-2.348-2.204-2.745-.231-.396-.025-.611.173-.808.178-.177.396-.462.594-.693.198-.231.264-.396.396-.66.132-.265.066-.495-.033-.693-.099-.198-.893-2.15-1.221-2.943-.322-.772-.649-.667-.893-.68-.231-.011-.495-.013-.76-.013-.264 0-.693.099-1.056.495-.363.396-1.387 1.354-1.387 3.306 0 1.951 1.42 3.834 1.618 4.099.198.264 2.795 4.267 6.77 5.983.946.408 1.683.652 2.258.834.95.301 1.814.259 2.496.157.761-.113 2.344-.958 2.674-1.884.33-.925.33-1.718.231-1.884-.099-.165-.363-.264-.76-.462z"
        fill="currentColor"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  const { items } = useCart();

  const handleClick = () => {
    let message = "Hola! Me gustaría consultar sobre los productos";
    
    if (items.length > 0) {
      const cartItems = items
        .map((item) => `• ${item.name} (x${item.quantity}) - ${item.price}`)
        .join("\n");
      message = `Hola! Me gustaría consultar por los siguientes productos:\n\n${cartItems}\n\n¿Están disponibles?`;
    }

    window.open(
      `https://wa.me/5491127329853?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
      aria-label={items.length > 0 ? `Consultar carrito por WhatsApp - ${items.length} ${items.length === 1 ? 'producto' : 'productos'}` : "Contactar por WhatsApp"}
    >
      <WhatsAppIcon size={22} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {items.length > 0 ? `Consultar ${items.length} ${items.length === 1 ? 'producto' : 'productos'}` : 'Escribinos por WhatsApp'}
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-slow-ping opacity-20" />
    </button>
  );
}
