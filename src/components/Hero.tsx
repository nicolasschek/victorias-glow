import { Sparkles, Search } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export function Hero({ searchTerm, setSearchTerm }: HeroProps) {
  const scrollToProducts = () => {
    const element = document.getElementById("productos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden"
      aria-label="Hero principal"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1618306659461-5ce94f3ec610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHdvbWFuJTIwYmVhdXR5JTIwZnJhZ3JhbmNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjA2MzM5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-rose-400/60 to-fuchsia-500/70 pointer-events-none" />
      
      {/* Animated rose petals and sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating rose petals effect */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-20 h-20 md:w-32 md:h-32 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-200 to-rose-300 blur-2xl" />
          </div>
        ))}
        
        {/* Sparkle particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-100 rounded-full opacity-70 animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-50 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-rose-100 rounded-full opacity-60 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        
        {/* Glamorous light beams */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-30" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-200/30 to-transparent opacity-40" />
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
      `}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto mb-8">
            <label htmlFor="product-search" className="sr-only">
              Buscar productos
            </label>
            <div className="relative flex items-center bg-white/90 backdrop-blur-sm rounded-full border border-white shadow-lg">
              <Sparkles className="ml-4 text-[#C85A7C] flex-shrink-0" size={20} aria-hidden="true" />
              <Search className="ml-2 text-[#C85A7C] flex-shrink-0" size={20} aria-hidden="true" />
              <input
                id="product-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..."
                className="flex-1 bg-transparent pl-2 pr-4 py-3 text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C85A7C] rounded-full"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                aria-label="Buscar productos"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="mr-4 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 p-1 rounded-full hover:bg-gray-100 min-w-[28px] min-h-[28px]"
                  aria-label="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          <p className="text-white drop-shadow-lg mb-10 max-w-2xl mx-auto text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Descubrí nuestra exclusiva colección Victoria's Secret, Maybelline, Karseell y mucho más . 
            Productos originales importados para que te sientas única y especial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToProducts}
              className="bg-white text-[#C85A7C] px-8 py-3 rounded-full hover:bg-white/90 transition-all hover:shadow-xl w-full sm:w-auto shadow-lg text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 min-h-[48px]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Ver Catálogo
            </button>
            <a
              href="https://wa.me/5491127329853?text=Hola!%20Me%20interesan%20sus%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C85A7C] text-white px-8 py-3 rounded-full border-2 border-white hover:bg-[#A94967] transition-all w-full sm:w-auto shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 min-h-[48px] inline-flex items-center justify-center"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Consultar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
