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

// Product images from Unsplash
const lipGlossImage = "https://images.unsplash.com/photo-1605381078451-a0672a91a4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXAlMjBnbG9zcyUyMG1ha2V1cHxlbnwxfHx8fDE3NjE3Nzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const bodyScrubImage = "https://images.unsplash.com/photo-1736947133766-c14511b54de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwc2NydWIlMjBzcGF8ZW58MXx8fHwxNzYxODAwMDM5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const bodyLotionImage = "https://images.unsplash.com/photo-1605204768985-81bad5fd9d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwbG90aW9uJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzYxODQ1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const bodySplashImage = "https://images.unsplash.com/photo-1709100198813-b43c16cfee95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm9keSUyMHNwcmF5fGVufDF8fHx8MTc2MTg0NTY5NXww&ixlib=rb-4.1.0&q=80&w=1080";
const teddyTintImage = "https://images.unsplash.com/photo-1725792826466-a7aa717da6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY29zbWV0aWNzJTIwbWFrZXVwfGVufDF8fHx8MTc2MTgyMjc5N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const kitKarseellImage1 = "https://images.unsplash.com/photo-1610595426075-eed5a3f521ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTc1MzI3OXww&ixlib=rb-4.1.0&q=80&w=1080";
const kitKarseellImage2 = "https://images.unsplash.com/photo-1677541829506-2084c4bba14c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwbnV0cml0aW9uJTIwbWFza3xlbnwxfHx8fDE3NjE4NDU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const lorealNutricionImage = "https://images.unsplash.com/photo-1677541829506-2084c4bba14c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwbnV0cml0aW9uJTIwbWFza3xlbnwxfHx8fDE3NjE4NDU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const purpleHairMaskImage = "https://images.unsplash.com/photo-1606605415063-7301aec7b51c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXJwbGUlMjBzaGFtcG9vJTIwaGFpcnxlbnwxfHx8fDE3NjE4NDU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const protectorTermicoImage = "https://images.unsplash.com/photo-1635766054474-ebaba5355bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF0JTIwcHJvdGVjdG9yJTIwc3ByYXl8ZW58MXx8fHwxNzYxODQ1Njk3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const kitVSImage1 = "https://images.unsplash.com/photo-1632841176063-5ba5d99ad12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWN0b3JpYXMlMjBzZWNyZXQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjE4NDU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const kitVSImage2 = "https://images.unsplash.com/photo-1761479250468-b7b836e412ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwc2V0fGVufDF8fHx8MTc2MTcyOTQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const kitVSImage3 = "https://images.unsplash.com/photo-1535980904816-5741c64232bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYmVhdXR5JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYxODQ1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const kitVSImage4 = "https://images.unsplash.com/photo-1667480099552-92bfee05685d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBmcmFncmFuY2UlMjBwZXJmdW1lfGVufDF8fHx8MTc2MTg0NTY5OHww&ixlib=rb-4.1.0&q=80&w=1080";
const kitVSImage5 = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBzZXQlMjBwaW5rfGVufDF8fHx8MTc2MTg0NTY5OXww&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage1 = "https://images.unsplash.com/photo-1667480099552-92bfee05685d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBmcmFncmFuY2UlMjBwZXJmdW1lfGVufDF8fHx8MTc2MTg0NTY5OHww&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage2 = "https://images.unsplash.com/photo-1709100198813-b43c16cfee95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm9keSUyMHNwcmF5fGVufDF8fHx8MTc2MTg0NTY5NXww&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage3 = "https://images.unsplash.com/photo-1632841176063-5ba5d99ad12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWN0b3JpYXMlMjBzZWNyZXQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjE4NDU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage4 = "https://images.unsplash.com/photo-1630313584556-bd51ec5f0bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2MTc2MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage5 = "https://images.unsplash.com/photo-1535980904816-5741c64232bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYmVhdXR5JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYxODQ1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage6 = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBzZXQlMjBwaW5rfGVufDF8fHx8MTc2MTg0NTY5OXww&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage7 = "https://images.unsplash.com/photo-1761479250468-b7b836e412ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwc2V0fGVufDF8fHx8MTc2MTcyOTQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const cherrySplashImage8 = "https://images.unsplash.com/photo-1630313584556-bd51ec5f0bd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc2MTc2MTEzNHww&ixlib=rb-4.1.0&q=80&w=1080";
const fashionShowImage1 = "https://images.unsplash.com/photo-1632841176063-5ba5d99ad12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWN0b3JpYXMlMjBzZWNyZXQlMjBwcm9kdWN0c3xlbnwxfHx8fDE3NjE4NDU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const fashionShowImage2 = "https://images.unsplash.com/photo-1535980904816-5741c64232bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYmVhdXR5JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYxODQ1Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080";
const fashionShowImage3 = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBzZXQlMjBwaW5rfGVufDF8fHx8MTc2MTg0NTY5OXww&ixlib=rb-4.1.0&q=80&w=1080";
const fashionShowImage4 = "https://images.unsplash.com/photo-1761479250468-b7b836e412ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwc2V0fGVufDF8fHx8MTc2MTcyOTQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080";
const karseellImage1 = "https://images.unsplash.com/photo-1610595426075-eed5a3f521ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTc1MzI3OXww&ixlib=rb-4.1.0&q=80&w=1080";
const karseellImage2 = "https://images.unsplash.com/photo-1677541829506-2084c4bba14c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwbnV0cml0aW9uJTIwbWFza3xlbnwxfHx8fDE3NjE4NDU2OTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const karseellOilImage1 = "https://images.unsplash.com/photo-1610595426075-eed5a3f521ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc2MTc1MzI3OXww&ixlib=rb-4.1.0&q=80&w=1080";
const bodyLotionImage1 = "https://images.unsplash.com/photo-1605204768985-81bad5fd9d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5JTIwbG90aW9uJTIwc2tpbmNhcmV8ZW58MXx8fHwxNzYxODQ1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const bodySplashImage1 = "https://images.unsplash.com/photo-1709100198813-b43c16cfee95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm9keSUyMHNwcmF5fGVufDF8fHx8MTc2MTg0NTY5NXww&ixlib=rb-4.1.0&q=80&w=1080";
const lessWhiteImage = "https://images.unsplash.com/photo-1725792826466-a7aa717da6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY29zbWV0aWNzJTIwbWFrZXVwfGVufDF8fHx8MTc2MTgyMjc5N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const lessPinkImage = "https://images.unsplash.com/photo-1725792826466-a7aa717da6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY29zbWV0aWNzJTIwbWFrZXVwfGVufDF8fHx8MTc2MTgyMjc5N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const lessBlackImage = "https://images.unsplash.com/photo-1605381078451-a0672a91a4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXAlMjBnbG9zcyUyMG1ha2V1cHxlbnwxfHx8fDE3NjE3Nzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const lessRedImage = "https://images.unsplash.com/photo-1605381078451-a0672a91a4be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXAlMjBnbG9zcyUyMG1ha2V1cHxlbnwxfHx8fDE3NjE3Nzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const lessLilacImage = "https://images.unsplash.com/photo-1725792826466-a7aa717da6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY29zbWV0aWNzJTIwbWFrZXVwfGVufDF8fHx8MTc2MTgyMjc5N3ww&ixlib=rb-4.1.0&q=80&w=1080";

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
