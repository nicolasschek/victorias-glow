import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

function NavButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-[#C85A7C] px-4 py-2 rounded-full transition-all duration-300 drop-shadow-md hover:bg-[#E91E63]/70 hover:shadow-lg hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
      style={{ 
        fontWeight: 500, 
        textShadow: isHovered ? 'none' : '0 0 20px rgba(255, 255, 255, 1), 0 0 10px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(255, 255, 255, 0.8)' 
      }}
    >
      {children}
    </button>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-[#C85A7C] focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>

      {/* Sticky Logo */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="py-4 flex justify-center md:justify-start md:pl-4">
          <div className="flex items-center pointer-events-auto">
            <Logo className="h-16 w-auto md:h-20 drop-shadow-lg" />
          </div>
        </div>
      </div>

      <header className="absolute top-0 left-0 right-0 z-40" role="banner">
        <nav className="container mx-auto pr-4 pl-0 py-4" aria-label="Navegación principal">
          <div className="flex items-center justify-between">
            {/* Spacer for logo */}
            <div className="w-32 md:w-40"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <NavButton onClick={() => scrollToSection("inicio")}>
              Inicio
            </NavButton>
            <NavButton onClick={() => scrollToSection("productos")}>
              Productos
            </NavButton>
            <NavButton onClick={() => scrollToSection("nosotros")}>
              Nosotros
            </NavButton>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-white text-[#C85A7C] px-6 py-2 rounded-full hover:bg-white/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500"
            >
              Contacto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors drop-shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-pink-500 rounded-lg min-w-[44px] min-h-[44px]"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-4 py-4 border-t border-white/20 backdrop-blur-md rounded-lg animate-fadeInBg" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <div className="flex flex-col gap-4 px-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-white hover:text-white/80 transition-colors py-2 px-3 rounded-lg animate-fadeInItem focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="text-left text-white hover:text-white/80 transition-colors py-2 px-3 rounded-lg animate-fadeInItem focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
                style={{ animationDelay: '0.1s' }}
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection("nosotros")}
                className="text-left text-white hover:text-white/80 transition-colors py-2 px-3 rounded-lg animate-fadeInItem focus:outline-none focus:ring-2 focus:ring-white min-h-[44px]"
                style={{ animationDelay: '0.2s' }}
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-left bg-white text-[#C85A7C] px-6 py-2 rounded-full hover:bg-white/90 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-[#C85A7C] focus:ring-offset-2 min-h-[44px]"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
