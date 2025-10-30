import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCard } from "./components/ProductCard";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { InstagramButton } from "./components/InstagramButton";
import { CartButton } from "./components/CartButton";
import { CartSheet } from "./components/CartSheet";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Heart, Sparkles, Truck } from "lucide-react";
import lipGlossImage from "figma:asset/d65fada4b145f8b6fcc4eb9061517bd736809a2d.png";
import bodyScrubImage from "figma:asset/c9f6fd9a60325a61fb51434dd813cdf9e2439e9c.png";
import bodyLotionImage from "figma:asset/34f74d7808898ad813ad68286e84e357a7f2a56c.png";
import bodySplashImage from "figma:asset/91c5b0aad9d97890a8a3682e2f93cc124b867581.png";
import teddyTintImage from "figma:asset/379435f5dfb5867613c3b9377d55853332dfc9ac.png";
import kitKarseellImage1 from "figma:asset/971c459c4ceb093fcbf9ab4d1790abda5e909492.png";
import kitKarseellImage2 from "figma:asset/79da8a421c064b54a8d59f1806beaec135d62e1e.png";
import lorealNutricionImage from "figma:asset/fefd3723a9c754b69cbe24229656c46f2d7296b7.png";
import purpleHairMaskImage from "figma:asset/b09c8ebab024b8d4b2133eaf9d3ec9390f82dd84.png";
import protectorTermicoImage from "figma:asset/70c870811b7224b02204759cb5b050a418112667.png";
import kitVSImage1 from "figma:asset/b520d6da8cba35e21123e4543cc8fab15f014823.png";
import kitVSImage2 from "figma:asset/ec0c768acf907020f5ca7dfdbe01b6bf61b2316f.png";
import kitVSImage3 from "figma:asset/8f3164a7ce32f08622afc7a1ee5a5d5777c6e88a.png";
import kitVSImage4 from "figma:asset/dd393092b36f9923f3be7c85e461d77c3b120db4.png";
import kitVSImage5 from "figma:asset/5992a74e1ccaf18b97b9bb6943bd1fe1f4648f65.png";
import cherrySplashImage1 from "figma:asset/ecfcc31bff4cd872a91b66d0411787663ace3205.png";
import cherrySplashImage2 from "figma:asset/8ae1b77c0f91fe9dfea64ddb43f8a075f1aeaa8e.png";
import cherrySplashImage3 from "figma:asset/770d40965b3d14d3532a631671300e1b34ad02ae.png";
import cherrySplashImage4 from "figma:asset/cac2716fd2bb76a061daf08c5d26781e0f0d2627.png";
import cherrySplashImage5 from "figma:asset/296e74c2ae67d1e6f1209b31cd1ec46f84beedc5.png";
import cherrySplashImage6 from "figma:asset/76ee809831883aaa217739c9698da72dbe8ce8be.png";
import cherrySplashImage7 from "figma:asset/c4ff1abb0bb7792fb9348dc591543fadbfbea4d1.png";
import cherrySplashImage8 from "figma:asset/210d5ced6ded20fda1a1a7d876bdff929dc10da7.png";
import fashionShowImage1 from "figma:asset/b17a5d970cc40347ebfd3cefb7892352bcf95378.png";
import fashionShowImage2 from "figma:asset/c8980a11f70455d3bf96f46603c9daebc9ceec73.png";
import fashionShowImage3 from "figma:asset/85e21e811994dea1cbca828f21b806498523e591.png";
import fashionShowImage4 from "figma:asset/03fffa2c394037de2aa81a8b0d875ecd56e39e7e.png";
import karseellImage1 from "figma:asset/f9c85bca43825fdb813799f72137b121779fbe55.png";
import karseellImage2 from "figma:asset/216a799a7b2788f6ac7d11c4f92bcfd3ae46ced7.png";
import karseellOilImage1 from "figma:asset/6a85cc7a0e069ad33208dd2ed15e96059e3669b3.png";
import bodyLotionImage1 from "figma:asset/7c52323db91f076c0fed3009040fb6449a7017cc.png";
import bodySplashImage1 from "figma:asset/8836a185770d48ed064d3bd484376beafcd38586.png";
import lessWhiteImage from "figma:asset/f3abae82db33d3c9ff6566e457f64b571cfc24f3.png";
import lessPinkImage from "figma:asset/44a835728a3db86ca1b49868383edce033402b38.png";
import lessBlackImage from "figma:asset/d77241bbb76dacedcfe1357dab0e4219dbf4bab3.png";
import lessRedImage from "figma:asset/d1c8d8b9d791d50f8f78ae58b8983766b109942f.png";
import lessLilacImage from "figma:asset/cd43bf838163bc114d651199b01f302e04a62dd9.png";

// Mock product data
const products = [
  {
    id: "3",
    name: "Teddy Tint Maybelline",
    description: "Labial líquido con efecto matte de larga duración. 12H de color intenso, no transfiere y acabado suave. Variedad de tonos disponibles.",
    price: "$22.000",
    image: teddyTintImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "4",
    name: "Kit Karseell: Mascarilla + Aceite",
    description: "Kit completo de reparación capilar. Incluye mascarilla de colágeno (500ml) y aceite de esencia de maca (50ml). Para cabello seco y dañado.",
    price: "$42.000",
    image: [kitKarseellImage1, kitKarseellImage2],
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "5",
    name: "Tratamiento Nutrición L'Oreal Paris",
    description: "Elvive Óleo Extraordinario con 6 óleos de flores preciosas. Nutrición, suavidad, brillo y ligereza. Para todo tipo de cabello. 100ml.",
    price: "$19.000",
    image: lorealNutricionImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "13",
    name: "Mascarilla Purple Hair Mask",
    description: "Karseell Maca Essence Purple Hair Mask. Matiza rubios, protege de rayos UV y calor. Color seguro para cabello teñido. 500ml.",
    price: "$32.000",
    image: purpleHairMaskImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "14",
    name: "Protector Térmico Karseell",
    description: "Heat Protect Spray Karseell. Protección térmica para planchado y secado. Fórmula ligera sin residuos. 100ml.",
    price: "Sin Stock",
    image: protectorTermicoImage,
    category: "Cuidado" as const,
    isNew: true,
    outOfStock: true,
  },
  {
    id: "15",
    name: "Kit Victoria's Secret",
    description: "Kit completo con Body Splash 75ml + Body Lotion 75ml. Fragancias icónicas: Bare Vanilla, Love Spell, Velvet Petals y Pure Seduction. Regalo perfecto.",
    price: "$48.000",
    image: [kitVSImage1, kitVSImage2, kitVSImage3, kitVSImage4, kitVSImage5],
    category: "Fragancias" as const,
    isNew: true,
  },
  {
    id: "18",
    name: "Mascarilla Karseell",
    description: "Mascarilla reparadora Karseell Maca Power Collagen. Sistema de cuidado capilar 2 piezas con mascarilla de colágeno y aceite esencial. Repara y nutre el cabello. 500ml.",
    price: "$30.000",
    image: [karseellImage1, karseellImage2],
    category: "Cuidado Personal" as const,
    isNew: true,
  },
  {
    id: "19",
    name: "Aceite Karseell",
    description: "Aceite esencial Karseell Maca Power. Tratamiento capilar nutritivo que repara y protege. Deja el cabello suave, brillante y manejable. 50ml.",
    price: "$22.000",
    image: [karseellOilImage1],
    category: "Cuidado Personal" as const,
    isNew: true,
  },
  {
    id: "20",
    name: "Body Lotion & Body Lotion Shimmer Victoria's Secret",
    description: "Lociones corporales Victoria's Secret en presentación clásica y shimmer. Fragancias variadas incluyendo Velvet Petals, Midnight Indulge, Passion Petals y más. Hidratación intensa con brillo opcional. 236ml.",
    price: "$35.000",
    image: [bodyLotionImage1],
    category: "Cuidado Personal" as const,
    isNew: true,
  },
  {
    id: "21",
    name: "Body Splash & Body Splash Shimmer Victoria's Secret",
    description: "Body Splashes Victoria's Secret en presentación clásica y shimmer. Fragancias variadas incluyendo Lavender & Vanilla, Pure Seduction, Aqua Kiss, Romantic, Coconut Milk & Rose y más. 250ml.",
    price: "$35.000",
    image: [bodySplashImage1],
    category: "Fragancias" as const,
    isNew: true,
  },
  {
    id: "6",
    name: "Exfoliating Body Scrub",
    description: "Exfoliante corporal suave con fragancia deliciosa. Deja la piel suave y renovada. 226g.",
    price: "$30.000",
    image: bodyScrubImage,
    category: "Cuidado" as const,
    isNew: true,
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Filtrar productos basado en búsqueda
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
      
      <main id="main-content" role="main">
        <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        {/* Features Section */}
        <section className="py-12 bg-white border-y border-gray-100" aria-label="Características">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-50 rounded-full mb-4" aria-hidden="true">
                  <Sparkles className="text-[#C85A7C]" size={24} />
                </div>
                <h3 className="text-gray-800 mb-2">Originales</h3>
                <p className="text-sm text-gray-600">
                  Productos auténticos importados directamente
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-50 rounded-full mb-4" aria-hidden="true">
                  <Heart className="text-[#C85A7C]" size={24} />
                </div>
                <h3 className="text-gray-800 mb-2">Atención Personalizada</h3>
                <p className="text-sm text-gray-600">
                  Te asesoramos en cada paso de tu compra
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-pink-50 rounded-full mb-4" aria-hidden="true">
                  <Truck className="text-[#C85A7C]" size={24} />
                </div>
                <h3 className="text-gray-800 mb-2">Envíos a todo el país</h3>
                <p className="text-sm text-gray-600">
                  Recibí tus productos en la comodidad de tu hogar
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section id="productos" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/30" aria-labelledby="productos-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 id="productos-heading" className="text-[#C85A7C] mb-4">Nuestros Productos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explorá nuestra selección de productos Victoria's Secret, Maybelline, Karseell & más. 
                Cada artículo es original y está disponible para consultar.
              </p>
            </div>
            
            <Tabs defaultValue="todos" className="max-w-7xl mx-auto">
              <div className="relative mb-8">
                {/* Indicador izquierdo */}
                <div className="absolute left-0 top-0 h-9 z-10 flex items-center pointer-events-none">
                  <div className="bg-gradient-to-r from-white via-white to-transparent pr-4 pl-2 h-full flex items-center">
                    <span className="text-[#C85A7C] opacity-60">&lt;</span>
                  </div>
                </div>
                
                {/* Indicador derecho */}
                <div className="absolute right-0 top-0 h-9 z-10 flex items-center pointer-events-none">
                  <div className="bg-gradient-to-l from-white via-white to-transparent pl-4 pr-2 h-full flex items-center">
                    <span className="text-[#C85A7C] opacity-60">&gt;</span>
                  </div>
                </div>
                
                <div className="w-full overflow-x-auto scrollbar-hide px-8">
                  <TabsList className="inline-flex w-auto min-w-full justify-start gap-1">
                    <TabsTrigger value="todos" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Todos</TabsTrigger>
                    <TabsTrigger value="lenceria" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Lencería</TabsTrigger>
                    <TabsTrigger value="fragancias" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Fragancias</TabsTrigger>
                    <TabsTrigger value="cuidado-personal" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Cuidado Personal</TabsTrigger>
                    <TabsTrigger value="maquillaje" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Maquillaje</TabsTrigger>
                    <TabsTrigger value="cuidado" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Cuidado Capilar</TabsTrigger>
                  </TabsList>
                </div>
              </div>
              
              <TabsContent value="todos" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No se encontraron productos que coincidan con tu búsqueda.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="lenceria" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter((p) => p.category === "Lencería").length > 0 ? (
                    filteredProducts
                      .filter((p) => p.category === "Lencería")
                      .map((product) => (
                        <ProductCard key={product.id} {...product} />
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No se encontraron productos de lencería que coincidan con tu búsqueda.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="fragancias" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter((p) => p.category === "Fragancias").length > 0 ? (
                    filteredProducts
                      .filter((p) => p.category === "Fragancias")
                      .map((product) => (
                        <ProductCard key={product.id} {...product} />
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No se encontraron fragancias que coincidan con tu búsqueda.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="cuidado-personal" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter((p) => p.category === "Cuidado Personal").length > 0 ? (
                    filteredProducts
                      .filter((p) => p.category === "Cuidado Personal")
                      .map((product) => (
                        <ProductCard key={product.id} {...product} />
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No se encontraron productos de cuidado personal que coincidan con tu búsqueda.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="maquillaje" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter((p) => p.category === "Maquillaje").length > 0 ? (
                    filteredProducts
                      .filter((p) => p.category === "Maquillaje")
                      .map((product) => (
                        <ProductCard key={product.id} {...product} />
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No se encontraron productos de maquillaje que coincidan con tu búsqueda.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="cuidado" className="mt-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter((p) => p.category === "Cuidado").length > 0 ? (
                    filteredProducts
                      .filter((p) => p.category === "Cuidado")
                      .map((product) => (
                        <ProductCard key={product.id} {...product} />
                      ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <p className="text-gray-500">No se encontraron productos de cuidado capilar que coincidan con tu búsqueda.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Nosotros Section */}
        <section id="nosotros" className="py-16 md:py-24 bg-white" aria-labelledby="nosotros-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="nosotros-heading" className="text-[#C85A7C] mb-4">Sobre Nosotros</h2>
                <div className="w-20 h-1 bg-[#C85A7C] mx-auto mb-8 rounded-full" aria-hidden="true" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    En <span className="text-[#C85A7C]">VICTORIA'S GLOW by: Agus</span>, nos especializamos en traerte lo mejor de Victoria's Secret - Maybelline - Karseell - y más, directamente a Argentina.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Cada producto es cuidadosamente seleccionado e importado para garantizar autenticidad y calidad. Desde lencería exclusiva hasta las fragancias más icónicas, nuestra misión es que te sientas única y especial.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ofrecemos atención personalizada y asesoramiento en cada compra, porque tu satisfacción es nuestra prioridad.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-pink-50 p-6 rounded-2xl text-center">
                    <div className="text-3xl text-[#C85A7C] mb-2">100%</div>
                    <p className="text-sm text-gray-600">Productos Originales</p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-2xl text-center">
                    <div className="text-3xl text-[#C85A7C] mb-2">🇦🇷</div>
                    <p className="text-sm text-gray-600">Envíos a todo el país</p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-2xl text-center">
                    <div className="text-3xl text-[#C85A7C] mb-2">✨</div>
                    <p className="text-sm text-gray-600">Atención Personalizada</p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-2xl text-center">
                    <div className="text-3xl text-[#C85A7C] mb-2">💝</div>
                    <p className="text-sm text-gray-600">Calidad Garantizada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section id="contacto" className="py-16 md:py-24 bg-gradient-to-b from-pink-50/30 to-white" aria-labelledby="contacto-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 id="contacto-heading" className="text-[#C85A7C] mb-4">Contacto</h2>
              <div className="w-20 h-1 bg-[#C85A7C] mx-auto mb-8 rounded-full" aria-hidden="true" />
              
              <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
                ¿Tenés alguna consulta? Estamos para ayudarte. Contactanos por WhatsApp o seguinos en Instagram para estar al día con nuestras novedades.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <a
                  href="https://wa.me/5491127329853?text=Hola!%20Me%20gustaría%20consultar%20sobre%20los%20productos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-8 rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">💬</div>
                  <h3 className="mb-2">WhatsApp</h3>
                  <p className="text-sm text-white/90">Escribinos para consultas y pedidos</p>
                </a>
                
                <a
                  href="https://www.instagram.com/victoriasglow.byagus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#E1306C] via-[#C13584] to-[#833AB4] text-white p-8 rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📸</div>
                  <h3 className="mb-2">Instagram</h3>
                  <p className="text-sm text-white/90">@victoriasglow.byagus</p>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-8" role="contentinfo">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm text-gray-600">
              © 2024 VICTORIA'S GLOW by: Agus. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Productos originales Victoria's Secret y más.
            </p>
          </div>
        </footer>
      </main>

        <WhatsAppButton />
        <InstagramButton />
        <CartButton onClick={() => setIsCartOpen(true)} />
        <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
        <Toaster position="top-center" />
      </div>
    </CartProvider>
  );
}
