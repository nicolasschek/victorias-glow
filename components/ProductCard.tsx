import { useState, useEffect } from "react";
import { ShoppingBag, ChevronLeft, ChevronRight, X, ShoppingCart, Plus, Minus } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useCart } from "./CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | string[];
  category: "Lencería" | "Body Splash" | "Loción" | "Maquillaje" | "Cuidado Corporal" | "Cuidado";
  isNew?: boolean;
  outOfStock?: boolean;
  variants?: string[];
}

export function ProductCard({ id, name, description, price, image, category, isNew, outOfStock, variants }: ProductCardProps) {
  const images = Array.isArray(image) ? image : [image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cardQuantity, setCardQuantity] = useState(1);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [notes, setNotes] = useState("");
  const { addItem } = useCart();
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto: ${name}. ¿Está disponible?`
    );
    window.open(
      `https://wa.me/5491127329853?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const handleCardClick = () => {
    setModalImageIndex(currentImageIndex);
    setQuantity(1); // Reset quantity when opening modal
    setSelectedVariant(""); // Reset variant selection
    setNotes(""); // Reset notes
    setIsModalOpen(true);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToModalImage = (index: number) => {
    setModalImageIndex(index);
  };

  const handleAddToCart = (e?: React.MouseEvent, customQuantity?: number) => {
    if (e) {
      e.stopPropagation();
    }
    
    // Validar que se haya seleccionado variante si es requerida
    if (variants && variants.length > 0 && !selectedVariant) {
      toast.error("Por favor, seleccioná una variante", {
        description: "Es necesario elegir una opción antes de agregar al carrito.",
        duration: 3000,
      });
      return;
    }
    
    const imageUrl = Array.isArray(image) ? image[0] : image;
    const qty = customQuantity || 1;
    
    // Add items one by one to respect the quantity
    for (let i = 0; i < qty; i++) {
      addItem({
        id,
        name,
        price,
        image: imageUrl,
        category,
        variant: selectedVariant || undefined,
        notes: notes || undefined,
      });
    }
    
    let successMessage = `${qty} ${qty === 1 ? 'unidad' : 'unidades'} de ${name}`;
    if (selectedVariant) {
      successMessage += ` (${selectedVariant})`;
    }
    successMessage += ` ${qty === 1 ? 'agregada' : 'agregadas'} al carrito`;
    
    toast.success(successMessage, {
      description: "Podés seguir comprando o ir al carrito para finalizar tu pedido.",
      duration: 3000,
    });
    
    // Resetear campos después de agregar
    setIsModalOpen(false);
    setSelectedVariant("");
    setNotes("");
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const increaseCardQuantity = () => {
    setCardQuantity(prev => prev + 1);
  };

  const decreaseCardQuantity = () => {
    setCardQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleCardAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleAddToCart(e, cardQuantity);
    setIsPopoverOpen(false);
    setCardQuantity(1); // Reset after adding
  };

  // Navegación con teclado en el modal
  useEffect(() => {
    if (!isModalOpen || images.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setModalImageIndex((prev) => (prev + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, images.length]);

  return (
    <>
      <Card 
        className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-pink-100 flex flex-col h-full cursor-pointer focus-within:ring-2 focus-within:ring-[#C85A7C] focus-within:ring-offset-2" 
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label={`Ver detalles de ${name}`}
      >
        <div 
          className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
        <ImageWithFallback
          src={images[currentImageIndex]}
          alt={`${name} - Imagen ${currentImageIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Navegación de imágenes - solo si hay más de una imagen */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
              }`}
              aria-label={`Imagen anterior - ${currentImageIndex} de ${images.length}`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg z-10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] min-w-[44px] min-h-[44px] flex items-center justify-center ${
                isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
              }`}
              aria-label={`Imagen siguiente - ${currentImageIndex + 2} de ${images.length}`}
            >
              <ChevronRight size={18} />
            </button>
            
            {/* Indicadores de imagen */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" role="group" aria-label="Navegación de imágenes">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(index, e)}
                  className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] ${
                    index === currentImageIndex
                      ? "bg-white w-6 h-2"
                      : "bg-white/70 hover:bg-white/90 w-2 h-2"
                  }`}
                  aria-label={`Ir a imagen ${index + 1} de ${images.length}`}
                  aria-current={index === currentImageIndex ? "true" : "false"}
                />
              ))}
            </div>
            
            {/* Contador de imágenes */}
            <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10" aria-live="polite" aria-atomic="true">
              {currentImageIndex + 1}/{images.length}
            </div>
          </>
        )}
        
        {outOfStock ? (
          <Badge className="absolute top-3 right-3 bg-gray-500 hover:bg-gray-600">
            Sin Stock
          </Badge>
        ) : isNew ? (
          <Badge className="absolute top-3 right-3 bg-[#C85A7C] hover:bg-[#A94967]">
            Nuevo
          </Badge>
        ) : null}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <h3 className="text-gray-800 mb-2 line-clamp-1">{name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-[#C85A7C]">{price}</span>
        </div>
        <p className="text-xs text-gray-400 italic">Haz clic para ver más detalles</p>
      </CardContent>
      
        <CardFooter className="p-4 pt-0 mt-auto">
          <div className="flex gap-2 w-full">
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
              <PopoverTrigger asChild>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  disabled={outOfStock}
                  className={`flex-1 border-2 py-2.5 rounded-full transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] focus:ring-offset-2 min-h-[44px] ${
                    outOfStock
                      ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                      : isPopoverOpen 
                        ? 'bg-pink-50 border-[#C85A7C] text-[#C85A7C]' 
                        : 'bg-white border-[#C85A7C] text-[#C85A7C] hover:bg-pink-50'
                  }`}
                  aria-label={`Agregar ${name} al carrito`}
                  aria-expanded={isPopoverOpen}
                >
                  <ShoppingCart size={18} aria-hidden="true" />
                  <span>Al Carrito</span>
                  {cardQuantity > 1 && !isPopoverOpen && (
                    <span className="absolute -top-1 -right-1 bg-[#C85A7C] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cardQuantity}
                    </span>
                  )}
                </button>
              </PopoverTrigger>
              <PopoverContent 
                className="w-64 p-4" 
                onClick={(e) => e.stopPropagation()}
                onOpenAutoFocus={(e) => e.preventDefault()}
                align="center"
                side="top"
              >
                <div className="space-y-3">
                  <h4 className="text-sm text-gray-700">¿Cuántos querés agregar?</h4>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        decreaseCardQuantity();
                      }}
                      className="p-2 text-gray-600 hover:bg-pink-50 hover:text-[#C85A7C] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A7C] disabled:opacity-50 disabled:cursor-not-allowed min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Disminuir cantidad"
                      disabled={cardQuantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <div className="px-4 py-1 bg-pink-50 rounded-lg min-w-[48px] text-center">
                      <span className="text-lg text-gray-800" aria-live="polite">
                        {cardQuantity}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        increaseCardQuantity();
                      }}
                      className="p-2 text-gray-600 hover:bg-pink-50 hover:text-[#C85A7C] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#C85A7C] min-w-[36px] min-h-[36px] flex items-center justify-center"
                      aria-label="Aumentar cantidad"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button
                    onClick={handleCardAddToCart}
                    className="w-full bg-[#C85A7C] text-white py-2.5 rounded-full hover:bg-[#A94967] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] min-h-[44px] shadow-sm hover:shadow-md"
                  >
                    <ShoppingCart size={16} />
                    <span>
                      {cardQuantity === 1 
                        ? 'Agregar al carrito' 
                        : `Agregar ${cardQuantity} unidades`}
                    </span>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleWhatsAppClick();
              }}
              className="flex-1 bg-[#C85A7C] text-white py-2.5 rounded-full hover:bg-[#A94967] transition-all flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#C85A7C] focus:ring-offset-2 min-h-[44px]"
              aria-label={`Consultar por ${name} en WhatsApp`}
            >
              <ShoppingBag size={18} aria-hidden="true" />
              <span>Consultar</span>
            </button>
          </div>
        </CardFooter>
      </Card>

      {/* Modal de Producto */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto p-0" aria-describedby="product-description">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Columna de imágenes */}
            <div className="relative bg-gradient-to-br from-pink-50 to-rose-50 p-6 md:p-12 flex flex-col items-center justify-center min-h-[400px] md:min-h-[700px]">
              <div className="relative w-full flex-1 flex items-center justify-center">
                <ImageWithFallback
                  src={images[modalImageIndex]}
                  alt={`${name} - Imagen ${modalImageIndex + 1}`}
                  className="w-full h-auto object-contain rounded-lg max-h-[350px] md:max-h-[650px]"
                />
                
                {/* Navegación de imágenes en modal */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevModalImage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#C85A7C] min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label={`Imagen anterior - ${modalImageIndex} de ${images.length}`}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextModalImage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-[#C85A7C] min-w-[44px] min-h-[44px] flex items-center justify-center"
                      aria-label={`Imagen siguiente - ${modalImageIndex + 2} de ${images.length}`}
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Contador */}
                    <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-3 py-1 rounded-full" aria-live="polite">
                      {modalImageIndex + 1}/{images.length}
                    </div>

                    {/* Indicadores de navegación (puntos) - Solo en Desktop */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex gap-1.5">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToModalImage(index)}
                          className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] ${
                            index === modalImageIndex
                              ? "bg-white w-6 h-2"
                              : "bg-white/70 hover:bg-white/90 w-2 h-2"
                          }`}
                          aria-label={`Ir a imagen ${index + 1} de ${images.length}`}
                          aria-current={index === modalImageIndex ? "true" : "false"}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Miniaturas - Solo en Mobile */}
              {images.length > 1 && (
                <div className="mt-4 flex gap-2 justify-center flex-wrap md:hidden">
                  {images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToModalImage(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-[#C85A7C] ${
                        index === modalImageIndex
                          ? "border-[#C85A7C] scale-110"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Miniatura ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Columna de información */}
            <div className="p-6 md:p-8 flex flex-col">
              <DialogHeader>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <DialogTitle className="text-2xl text-gray-800 mb-2">{name}</DialogTitle>
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="bg-pink-50 text-[#C85A7C]">
                        {category}
                      </Badge>
                      {outOfStock ? (
                        <Badge className="bg-gray-500 hover:bg-gray-600">
                          Sin Stock
                        </Badge>
                      ) : isNew ? (
                        <Badge className="bg-[#C85A7C] hover:bg-[#A94967]">
                          Nuevo
                        </Badge>
                      ) : null}
                    </div>
                  </div>
                </div>
                
                <DialogDescription id="product-description" className="text-base text-gray-700 leading-relaxed mb-6">
                  {description}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-auto space-y-3">
                <div className="border-t border-gray-200 pt-4 pb-2">
                  <span className="text-sm text-gray-500 block mb-1">Precio</span>
                  <span className="text-3xl text-[#C85A7C]">{price}</span>
                </div>

                {/* Selector de Variantes */}
                {variants && variants.length > 0 && !outOfStock && (
                  <div className="space-y-2">
                    <Label htmlFor="variant-select" className="text-sm text-gray-700">
                      Seleccionar variante <span className="text-red-500">*</span>
                    </Label>
                    <Select value={selectedVariant} onValueChange={setSelectedVariant}>
                      <SelectTrigger 
                        id="variant-select"
                        className="w-full border-2 border-gray-200 focus:border-[#C85A7C] focus:ring-[#C85A7C] min-h-[44px]"
                      >
                        <SelectValue placeholder="Elegir opción..." />
                      </SelectTrigger>
                      <SelectContent>
                        {variants.map((variant, index) => (
                          <SelectItem key={index} value={variant}>
                            {variant}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Campo de Notas Adicionales */}
                {!outOfStock && (
                  <div className="space-y-2">
                    <Label htmlFor="notes-input" className="text-sm text-gray-700">
                      Notas adicionales (opcional)
                    </Label>
                    <Textarea
                      id="notes-input"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder='Ej: "Sin caja", "Para regalo", etc.'
                      className="min-h-[80px] border-2 border-gray-200 focus:border-[#C85A7C] focus:ring-[#C85A7C] resize-none"
                      maxLength={150}
                    />
                    <p className="text-xs text-gray-500 text-right">
                      {notes.length}/150 caracteres
                    </p>
                  </div>
                )}

                {/* Selector de Cantidad */}
                {!outOfStock && (
                  <div className="space-y-2">
                    <label className="text-sm text-gray-700 block">Cantidad</label>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-white border-2 border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            decreaseQuantity();
                          }}
                          className="px-4 py-2.5 text-gray-600 hover:bg-pink-50 hover:text-[#C85A7C] transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C85A7C] disabled:opacity-50 disabled:cursor-not-allowed min-w-[44px]"
                          aria-label="Disminuir cantidad"
                          disabled={quantity <= 1}
                        >
                          <Minus size={18} />
                        </button>
                        <div className="px-6 py-2.5 text-center min-w-[60px] border-x-2 border-gray-200">
                          <span className="text-lg text-gray-800" aria-live="polite">
                            {quantity}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            increaseQuantity();
                          }}
                          className="px-4 py-2.5 text-gray-600 hover:bg-pink-50 hover:text-[#C85A7C] transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C85A7C] min-w-[44px]"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(e, quantity);
                      setIsModalOpen(false); // Close modal after adding
                    }}
                    disabled={outOfStock}
                    className={`flex-1 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C85A7C] focus:ring-offset-2 min-h-[48px] ${
                      outOfStock
                        ? 'bg-gray-100 border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                        : 'bg-white border-2 border-[#C85A7C] text-[#C85A7C] hover:bg-pink-50 hover:shadow-md'
                    }`}
                  >
                    <ShoppingCart size={20} aria-hidden="true" />
                    <span>{outOfStock ? 'Sin Stock' : `Agregar ${quantity > 1 ? `(${quantity})` : ''}`}</span>
                  </button>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppClick();
                    }}
                    className="flex-1 bg-[#C85A7C] text-white py-3.5 rounded-full hover:bg-[#A94967] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#C85A7C] focus:ring-offset-2 min-h-[48px]"
                  >
                    <ShoppingBag size={20} aria-hidden="true" />
                    <span>Consultar</span>
                  </button>
                </div>

                <p className="text-xs text-center text-gray-500">
                  Agregá al carrito para armar tu pedido completo
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
