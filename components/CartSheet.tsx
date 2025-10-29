import { ShoppingCart, Trash2, Plus, Minus, X } from "lucide-react";
import { useCart } from "./CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const { items, removeItem, updateQuantity, clearCart, getTotalItems } = useCart();

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    const message = items
      .map(
        (item) =>
          `• ${item.name} (x${item.quantity}) - ${item.price}`
      )
      .join("\n");

    const fullMessage = encodeURIComponent(
      `Hola! Me gustaría consultar por los siguientes productos:\n\n${message}\n\n¿Están disponibles?`
    );

    window.open(
      `https://wa.me/5491127329853?text=${fullMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0" aria-describedby="cart-description">
        <SheetHeader className="px-6 pt-6 pb-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-pink-50 p-2 rounded-full">
                <ShoppingCart className="text-[#C85A7C]" size={24} />
              </div>
              <div>
                <SheetTitle className="text-xl">Tu Carrito</SheetTitle>
                <SheetDescription id="cart-description" className="text-sm">
                  {getTotalItems()} {getTotalItems() === 1 ? 'producto' : 'productos'} seleccionado{getTotalItems() !== 1 ? 's' : ''}
                </SheetDescription>
              </div>
            </div>
          </div>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
            <div className="bg-pink-50 p-6 rounded-full mb-4">
              <ShoppingCart className="text-[#C85A7C]" size={48} />
            </div>
            <h3 className="text-gray-800 mb-2 text-center">Tu carrito está vacío</h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Agregá productos para armar tu pedido
            </p>
            <Button
              onClick={() => onOpenChange(false)}
              className="bg-[#C85A7C] hover:bg-[#A94967] text-white"
            >
              Ver Productos
            </Button>
          </div>
        ) : (
          <>
            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-pink-50/50 rounded-lg hover:bg-pink-50 transition-colors"
                  >
                    <div className="w-20 h-20 flex-shrink-0 bg-white rounded-lg overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm text-gray-800 mb-1 line-clamp-2">
                        {item.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs mb-2">
                        {item.category}
                      </Badge>
                      <p className="text-[#C85A7C]">{item.price}</p>
                    </div>

                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                        aria-label={`Eliminar ${item.name} del carrito`}
                      >
                        <Trash2 size={16} />
                      </button>

                      <div className="flex items-center gap-2 bg-white rounded-full border border-gray-200 p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-gray-600 hover:text-[#C85A7C] transition-colors p-1 rounded-full hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label={`Disminuir cantidad de ${item.name}`}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm min-w-[20px] text-center" aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-gray-600 hover:text-[#C85A7C] transition-colors p-1 rounded-full hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-[#C85A7C]"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer con acciones */}
            <div className="border-t px-6 py-4 space-y-3 bg-white">
              <button
                onClick={clearCart}
                className="w-full text-sm text-gray-600 hover:text-red-500 transition-colors py-2 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg"
              >
                <Trash2 size={16} />
                Vaciar carrito
              </button>

              <Button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-base shadow-lg hover:shadow-xl transition-all min-h-[56px]"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 2C8.268 2 2 8.268 2 16c0 2.524.667 4.893 1.834 6.939L2.5 28.5l5.561-1.334A13.936 13.936 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 2.4c6.409 0 11.6 5.191 11.6 11.6 0 6.409-5.191 11.6-11.6 11.6a11.563 11.563 0 01-5.881-1.634l-.442-.263-3.234.776.776-3.234-.263-.442A11.563 11.563 0 014.4 16c0-6.409 5.191-11.6 11.6-11.6z"
                    fill="currentColor"
                  />
                  <path
                    d="M23.296 19.176c-.396-.198-2.344-1.156-2.707-1.289-.363-.132-.628-.198-.893.198-.264.396-1.023 1.289-1.254 1.553-.231.264-.462.297-.858.099-.396-.198-1.674-.617-3.187-1.967-1.178-1.051-1.973-2.348-2.204-2.745-.231-.396-.025-.611.173-.808.178-.177.396-.462.594-.693.198-.231.264-.396.396-.66.132-.265.066-.495-.033-.693-.099-.198-.893-2.15-1.221-2.943-.322-.772-.649-.667-.893-.68-.231-.011-.495-.013-.76-.013-.264 0-.693.099-1.056.495-.363.396-1.387 1.354-1.387 3.306 0 1.951 1.42 3.834 1.618 4.099.198.264 2.795 4.267 6.77 5.983.946.408 1.683.652 2.258.834.95.301 1.814.259 2.496.157.761-.113 2.344-.958 2.674-1.884.33-.925.33-1.718.231-1.884-.099-.165-.363-.264-.76-.462z"
                    fill="currentColor"
                  />
                </svg>
                Consultar por WhatsApp
              </Button>

              <p className="text-xs text-center text-gray-500">
                Te contactaremos para confirmar disponibilidad y forma de pago
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
