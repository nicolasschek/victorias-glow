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

// Product images - Local images from /public/images/
const teddyTint1Image = "/images/teddy-tint-1.jpg";
const teddyTint2Image = "/images/teddy-tint-2.jpg";
const bodyScrubImage = "/images/body-scrub.jpg";
const kitKarseellImage1 = "/images/kit-karseell-1.jpg";
const kitKarseellImage2 = "/images/kit-karseell-2.jpg";
const lorealNutricionImage = "/images/loreal-nutricion.jpg";
const purpleHairMaskImage = "/images/purple-hair-mask.jpg";
const protectorTermicoImage = "/images/protector-termico.jpg";
const karseellImage1 = "/images/karseell-mascarilla-1.jpg";
const karseellImage2 = "/images/karseell-mascarilla-2.jpg";
const karseellOilImage1 = "/images/karseell-aceite.jpg";
const kitVSImage1 = "/images/kit-vs-1.jpg";
const kitVSImage2 = "/images/kit-vs-2.jpg";
const kitVSImage3 = "/images/kit-vs-3.jpg";
const kitVSImage4 = "/images/kit-vs-4.jpg";
const kitVSImage5 = "/images/kit-vs-5.jpg";
const bodyLotionImage = "/images/body-lotion-vs.jpg";
const bodyLotionImage1 = "/images/body-lotion-vs.jpg";
const bodySplashImage = "/images/body-splash-vs.jpg";
const bodySplashImage1 = "/images/body-splash-vs.jpg";

// Nuevos productos - Imágenes
const rimelFalsiesSurrealImage = "/images/rimel-the-falsies-surreal.jpg";
const sunkisserBlushImage = "/images/sunkisser-blush.jpg";
const baseFitMeImage1 = "/images/base-liquida-fit-me-1.jpg";
const baseFitMeImage2 = "/images/base-liquida-fit-me-2.jpg";
const baseFitMeImage3 = "/images/base-liquida-fit-me-3.jpg";
const labialInfalibleLorealImage = "/images/labial-infalible-loreal-paris.jpg";
const cremaPeinarLorealImage = "/images/crema-para-peinar-loreal-paris.jpg";
const rimelAirVolumen1Image = "/images/rimmel-air-volumen-loreal-paris-1.jpg";
const rimelAirVolumen2Image = "/images/rimmel-air-volumen-loreal-paris-2.jpg";
const lipLatexImage = "/images/lip-latex-rimel-london.jpg";
const labialThriliSeekerImage = "/images/labial-thrili-seeker.jpg";
const lipOilImage = "/images/lip-oil-oh-my-gloss.jpg";
const mascarillaArganImage = "/images/mascarilla-argan-karseell.jpg";
const protectorSolarDermaglosImage = "/images/protector-solar-facial-dermaglos.jpg";
const serumAntiManchasImage = "/images/serum-anti-manchas-loreal-paris.jpg";
const gelMiselarNiveaImage = "/images/gel-miselar-rose-care-nivea.jpg";
const serumCicatricureImage = "/images/serum-facial-cicatricure.jpg";
const paletaCityMiniImage = "/images/paleta-the-city-mini-maybelline.jpg";
const labialMateInkImage1 = "/images/labial-mate-ink-maybelline-1.jpg";
const labialMateInkImage2 = "/images/labial-mate-ink-maybelline-2.jpg";
const labialMateInkImage3 = "/images/labial-mate-ink-maybelline-3.jpg";
const labialMateInkImage4 = "/images/labial-mate-ink-maybelline-4.jpg";
const labialMateInkImage5 = "/images/labial-mate-ink-maybelline-5.jpg";
const labialMateInkImage6 = "/images/labial-mate-ink-maybelline-6.jpg";
const labialMateInkImage7 = "/images/labial-mate-ink-maybelline-7.jpg";
const labialMateInkImage8 = "/images/labial-mate-ink-maybelline-8.jpg";
const labialMateInkImage9 = "/images/labial-mate-ink-maybelline-9.jpg";
const labialMateInkImage10 = "/images/labial-mate-ink-maybelline-10.jpg";
const labialMateInkImage11 = "/images/labial-mate-ink-maybelline-11.jpg";
const labialMateInkImage12 = "/images/labial-mate-ink-maybelline-12.jpg";
const bombshellVS1Image = "/images/bombshell-victorias-secret-1.jpg";
const bombshellVS2Image = "/images/bombshell-victorias-secret-2.jpg";
const bombshellVS3Image = "/images/bombshell-victorias-secret-3.jpg";
const bombshellVS4Image = "/images/bombshell-victorias-secret-4.jpg";
const bombshellVS5Image = "/images/bombshell-victorias-secret-5.jpg";
const gelAcidoHialuronicoImage = "/images/gel-acido-hialuronico-loreal-paris.jpg";
const wonderfullRimmelImage = "/images/wonderfull-rimmel-london.jpg";
const rimelSkyHighImage1 = "/images/rimmel-sky-high-maybelline-1.jpg";
const rimelSkyHighImage2 = "/images/rimmel-sky-high-maybelline-2.jpg";
const serumExpressAclaraDiaImage = "/images/serum-express-aclara-dia-garnier.jpg";
const goldKeratinaImage = "/images/gold-keratina-karseell.jpg";
const delineadorLifterImage1 = "/images/delineador-lifter-liner-maybelline-1.jpg";
const delineadorLifterImage2 = "/images/delineador-lifter-liner-maybelline-2.jpg";
const baseSuperstayLumiImage = "/images/base-superstay-lumimatte-maybelline.jpg";
const correctorOjerasFitMeImage1 = "/images/corrector-de-ojeras-fit-me-maybelline-1.jpg";
const correctorOjerasFitMeImage2 = "/images/corrector-de-ojeras-fit-me-maybelline-2.jpg";
const correctorOjerasFitMeImage3 = "/images/corrector-de-ojeras-fit-me-maybelline-3.jpg";
const correctorOjerasFitMeImage4 = "/images/corrector-de-ojeras-fit-me-maybelline-4.jpg";
const gelFacialCicatricureImage = "/images/gel-facial-cicatricure.jpg";
const serumFacialDermaglos1Image = "/images/serum-facial-dermaglos-1.jpg";
const serumFacialDermaglos2Image = "/images/serum-facial-dermaglos-2.jpg";
const serumFacialDermaglos3Image = "/images/serum-facial-dermaglos-3.jpg";
const serumFacialDermaglos4Image = "/images/serum-facial-dermaglos-4.jpg";
const rimmelParadiseBig1Image = "/images/rimmel-paradise-big-loreal-paris-1.jpg";
const rimmelParadiseBig2Image = "/images/rimmel-paradise-big-loreal-paris-2.jpg";
const bodyMistPink1Image = "/images/body-mist-pink-1.jpg";
const bodyMistPink2Image = "/images/body-mist-pink-2.jpg";
const bodyMistPink3Image = "/images/body-mist-pink-3.jpg";
const bodyMistPink4Image = "/images/body-mist-pink-4.jpg";
const bodyMistPink5Image = "/images/body-mist-pink-5.jpg";
const bodyMistPink6Image = "/images/body-mist-pink-6.jpg";
const bodyMistPink7Image = "/images/body-mist-pink-7.jpg";
const bodyMistPink8Image = "/images/body-mist-pink-8.jpg";
const bodyMistPink9Image = "/images/body-mist-pink-9.jpg";
const bodyMistPink10Image = "/images/body-mist-pink-10.jpg";
const lotionBombshellVS1Image = "/images/lotion-bombshell-vs-1.jpg";
const lotionBombshellVS2Image = "/images/lotion-bombshell-vs-2.jpg";
const baseSuperstayAWImage = "/images/base-liquida-superstay-aw-maybelline.jpg";
const serumRevitalifAHImage = "/images/serum-revitalif-ah-loreal-paris.jpg";
const niveaCremaEssentialImage = "/images/nivea-crema-essential-24.jpg";
const aguaRosasNiveaImage = "/images/agua-de-rosas-nivea.jpg";
const aguaMicelarGarnier1Image = "/images/agua-micelar-garnier-1.jpg";
const aguaMicelarGarnier2Image = "/images/agua-micelar-garnier-2.jpg";
const aguaMicelarGarnier3Image = "/images/agua-micelar-garnier-3.jpg";
const aguaMicelarGarnier4Image = "/images/agua-micelar-garnier-4.jpg";
const aguaMicelarGarnier5Image = "/images/agua-micelar-garnier-5.jpg";
const proRetinolLorealImage = "/images/pro-retinol-loreal-paris.jpg";
const gelDuchaVS1Image = "/images/gel-ducha-vs-1.jpg";
const gelDuchaVS2Image = "/images/gel-ducha-vs-2.jpg";
const gelLimpiezaABImage = "/images/gel-limpieza-ab-loreal-paris.jpg";
const protectorSolarDailyImage = "/images/protector-solar-daily-nivea.jpg";
const rimmelTelescopicImage = "/images/rimmel-telescopic-loreal-paris.jpg";
const serumAACicatricureImage = "/images/serum-aa-cicatricure.jpg";
const lumiLiquidBlushImage = "/images/lumi-liquid-blush-loreal-paris.jpg";
const absoluteOilImage = "/images/absolute-oil-loreal-paris.jpg";
const glycolicBrightImage = "/images/glycolic-bright-loreal-paris.jpg";
const expressAclaraGarnierImage = "/images/express-aclara-garnier.jpg";
const serumOjosRevitalifImage = "/images/serum-ojos-revitalif-loreal-paris.jpg";
const rimmelElectroBlackImage = "/images/rimmel-electro-black-maybelline.jpg";
const brilliantEyes1Image = "/images/brilliant-eyes-loreal-paris-1.jpg";
const brilliantEyes2Image = "/images/brilliant-eyes-loreal-paris-2.jpg";
const rimmelSkyHighBlackImage = "/images/rimmel-sky-high-black-maybelline.jpg";
const bodyOilJojobaImage = "/images/body-oil-jojoba-vs.jpg";
const gelDespigmentanteImage = "/images/gel-despigmentante-dermaglos.jpg";
const limpiadorExpressAclaraImage = "/images/limpiador-express-aclara-garnier.jpg";
const desmaquillantePielSensibleImage = "/images/desmaquillante-piel-sensible-nivea.jpg";
const rimmelFalscheImage = "/images/rimmel-the-falsies-falsche-maybelline.jpg";
const superstayVinylInk1Image = "/images/superstay-vinyl-ink-maybelline-1.jpg";
const superstayVinylInk2Image = "/images/superstay-vinyl-ink-maybelline-2.jpg";
const superstayVinylInk3Image = "/images/superstay-vinyl-ink-maybelline-3.jpg";
const serumExpressAclaraGarnierImage = "/images/serum-express-aclara-garnier.jpg";
const serumExpressAclaraNocheImage = "/images/serum-express-aclara-noche-garnier.jpg";
const serumAOGBImage = "/images/serum-ao-gb-loreal-paris.jpg";
const protectorSolarLuminousImage = "/images/protector-solar-luminous-nivea.jpg";
const ceraKarseellImage = "/images/cera-karseell.jpg";
const rimmelSkyHighDiamondImage = "/images/rimmmel-sky-hihg-diamond.jpg";
const serumAntiArrugasNiveaImage = "/images/serum-anti-arrugas-nivea.jpg";
const serumUVDefenderImage = "/images/serum-uv-defender-loreal-paris.jpg";
const oleoSerumDoveImage = "/images/oleo-serum-dove.jpg";
const kitTravelKarseellImage = "/images/kit-travel-karseell.jpg";
const correctorTrueMatchImage = "/images/corrector-true-match-loreal-paris.jpg";
const baseFitMe2Image1 = "/images/base-fit-me-maybelline-1.jpg";
const baseFitMe2Image2 = "/images/base-fit-me-maybelline-2.jpg";
const correctorSuperstayAWImage = "/images/corrector-superstay-aw-maybelline.jpg";
const baseLastingFinishImage1 = "/images/base-lasting-finish-rimmel-london-1.jpg";
const baseLastingFinishImage2 = "/images/base-lasting-finish-rimmel-london-2.jpg";
const baseLastingFinishImage3 = "/images/base-lasting-finish-rimmel-london-3.jpg";
const baseLastingFinishImage4 = "/images/base-lasting-finish-rimmel-london-4.jpg";
const serumGlycolicGlossImage = "/images/serum-glycolic-gloss-loreal-paris.jpg";
const mistRoseCareImage = "/images/mist-rose-care-nivea.jpg";
const labialRiche1Image = "/images/labial-riche-loreal-paris-1.jpg";
const labialRiche2Image = "/images/labial-riche-loreal-paris-2.jpg";
const labialRiche3Image = "/images/labial-riche-loreal-paris-3.jpg";
const labialRiche4Image = "/images/labial-riche-loreal-paris-4.jpg";
const labialRiche5Image = "/images/labial-riche-loreal-paris-5.jpg";
const blushParadise1Image = "/images/blush-paradise-loreal-paris-1.jpg";
const blushParadise2Image = "/images/blush-paradise-loreal-paris-2.jpg";
const basePolvoFitMe1Image = "/images/base-polvo-fit-me-maybelline-1.jpg";
const basePolvoFitMe2Image = "/images/base-polvo-fit-me-maybelline-2.jpg";
const basePolvoFitMe3Image = "/images/base-polvo-fit-me-maybelline-3.jpg";
const basePolvoFitMe4Image = "/images/base-polvo-fit-me-maybelline-4.jpg";
const labialGlossParadiseImage = "/images/labial-gloss-paradise-loreal-paris.jpg";
const rimmelPremierWhiteImage = "/images/rimmel-sky-hihg-premier-white-maybelline.jpg";
const serumExpertFillerImage = "/images/serum-expert-filler-nivea.jpg";
const theBurgundyBarImage = "/images/the-burgundy-bar-maybelline.jpg";
const splashPinkVS1Image = "/images/splash-pink-vs-1.jpg";
const splashPinkVS2Image = "/images/splash-pink-vs-2.jpg";
const splashPinkVS3Image = "/images/splash-pink-vs-3.jpg";
const splashPinkVS4Image = "/images/splash-pink-vs-4.jpg";
const serumDreamLisoImage = "/images/serum-dream-liso-loreal-paris.jpg";
const keratinaKarseellImage = "/images/keratina-karseell.jpg";
const lotionPinkVS1Image = "/images/lotion-pink-vs-1.jpg";
const lotionPinkVS2Image = "/images/lotion-pink-vs-2.jpg";
const lotionPinkVS3Image = "/images/lotion-pink-vs-3.jpg";
const lotionPinkVS4Image = "/images/lotion-pink-vs-4.jpg";
const rimmelPanoramaImage = "/images/rimmel-panorama-loreal-paris.jpg";
const lifterGloss1Image = "/images/lifter-gloss-maybelline-1.jpg";
const lifterGloss2Image = "/images/lifter-gloss-maybelline-2.jpg";
const lifterGloss3Image = "/images/lifter-gloss-maybelline-3.jpg";
const lifterGloss4Image = "/images/lifter-gloss-maybelline-4.jpg";
const baseInfalibleMatteImage = "/images/base-infalible-matte-loreal-paris.jpg";
const uvDefenderColorImage = "/images/uv-defender-color-loreal-paris.jpg";
const lifterPlumpImage = "/images/lifter-plump-maybelline.jpg";
const gelCremaGBNocheImage = "/images/gel-crema-glycolic-bright-noche-loreal-paris.jpg";
const correctorInfalible24Image = "/images/corrector-infallible-24hs-loreal-paris.jpg";
const aguaMicelarBifasicaImage = "/images/agua-micelar-bifasica-loreal-paris.jpg";
const baseSkinInk1Image = "/images/base-skin-ink-loreal-paris-1.jpg";
const baseSkinInk2Image = "/images/base-skin-ink-loreal-paris-2.jpg";
const shampooMatizadorImage = "/images/shampoo-matizador-karseell.jpg";
const labialInfalibleLoreal1Image = "/images/labial-infalible-loreal-paris-1.jpg";
const labialInfalibleLoreal2Image = "/images/labial-infalible-loreal-paris-2.jpg";
const delineadorHyperPreciseImage = "/images/delineador-hyper-precise-maybelline.jpg";
const rimmelFireWorkImage = "/images/rimmel-fire-work-maybelline.jpg";
const rimmelGreatLashImage = "/images/rimmel-great-lash-maybelline.jpg";
const cityBronzerImage = "/images/city-bronzer-maybelline.jpg";
const serumRevitalifNocheImage = "/images/serum-revitalif-noche-loreal-paris.jpg";
const rimmelColossal1Image = "/images/rimmel-the-colossal-maybelline-1.jpg";
const rimmelColossal2Image = "/images/rimmel-the-colossal-maybelline-2.jpg";
const vanillaRebelImage = "/images/body-splash-vs-2-vanilla-rebel.jpg";
const decadentPlumImage = "/images/body-splash-vs-3-decadent-plum.jpg";
const pistachioCremeImage = "/images/body-splash-vs-4-pistachio-creme.jpg";
const vanillaCashmereImage = "/images/body-splash-vs-5-vanilla-cashmere.jpg";
const sugaredPetalsImage = "/images/body-splash-vs-6-sugared-petals.jpg";
const vanillaLaceImage = "/images/body-splash-vs-7-vanilla-lace.jpg";
const amberAperitifImage = "/images/body-splash-vs-8-amber-aperitif.jpg";
const twilightAmberBerryImage = "/images/body-splash-vs-9-twilight-amber-berry.jpg";
const dreamyAppleOrchardImage = "/images/body-splash-vs-10-dreamy-apple-orchard.jpg";
const cherryDesireImage = "/images/body-splash-vs-11-cherry-desire.jpg";
const pureSeductionVSImage = "/images/body-splash-vs-12-pure-seduction.jpg";
const bareVanillaVSImage = "/images/body-splash-vs-13-bare-vanilla.jpg";
const velvetPetalsVSImage = "/images/body-splash-vs-14-velvet-petals.jpg";

// Mock product data
const products = [
  {
    id: "3",
    name: "Teddy Tint Maybelline",
    description: "Labial líquido con efecto matte de larga duración. 12H de color intenso, no transfiere y acabado suave. Variedad de tonos disponibles.",
    price: "$22.000",
    image: [teddyTint1Image, teddyTint2Image],
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
    variants: ["Bare Vanilla", "Love Spell", "Velvet Petals", "Pure Seduction"],
  },
  {
    id: "18",
    name: "Mascarilla Karseell",
    description: "Mascarilla reparadora Karseell Maca Power Collagen. Sistema de cuidado capilar 2 piezas con mascarilla de colágeno y aceite esencial. Repara y nutre el cabello. 500ml.",
    price: "$30.000",
    image: [karseellImage1, karseellImage2],
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "19",
    name: "Aceite Karseell",
    description: "Aceite esencial Karseell Maca Power. Tratamiento capilar nutritivo que repara y protege. Deja el cabello suave, brillante y manejable. 50ml.",
    price: "$22.000",
    image: [karseellOilImage1],
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "20",
    name: "Body Lotion & Body Lotion Shimmer Victoria's Secret",
    description: "Lociones corporales Victoria's Secret en presentación clásica y shimmer. Fragancias variadas incluyendo Velvet Petals, Midnight Indulge, Passion Petals y más. Hidratación intensa con brillo opcional. 236ml.",
    price: "$35.000",
    image: [bodyLotionImage1],
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Velvet Petals", "Midnight Indulge", "Passion Petals", "Bare Vanilla", "Pure Seduction", "Aqua Kiss", "Romantic", "Coconut Milk & Rose"],
  },
  {
    id: "21",
    name: "Body Splash & Body Splash Shimmer Victoria's Secret",
    description: "Body Splashes Victoria's Secret en presentación clásica y shimmer. Fragancias variadas incluyendo Lavender & Vanilla, Pure Seduction, Aqua Kiss, Romantic, Coconut Milk & Rose y más. 250ml.",
    price: "$35.000",
    image: [bodySplashImage1],
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Lavender & Vanilla", "Pure Seduction", "Aqua Kiss", "Romantic", "Coconut Milk & Rose", "Bare Vanilla", "Love Spell", "Velvet Petals"],
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
  // NUEVOS PRODUCTOS
  {
    id: "100",
    name: "Rimmel The Falsies Surreal Maybelline",
    description: "Consigue un impacto surreal con la nueva máscara de pestañas The Falsies Surreal Extensions. Su fórmula con fibras híbridas y su cepillo en hélice, con cerdas que extienden cada pestaña, te brindarán hasta 10 veces más volumen y un 36% más de longitud. ¡Efecto extensiones de pestañas en casa!",
    price: "$22.000",
    image: rimelFalsiesSurrealImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "101",
    name: "Iluminador Líquido Sunkisser Blush de Maybelline",
    description: "Sunkisser Blush brinda un look radiante y un bronceado de verano en cualquier momento con un color intenso. Disponible en tonos mate y glow.",
    price: "$22.000",
    image: sunkisserBlushImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "102",
    name: "Base Líquida Fit Me Vitamina C de Maybelline",
    description: "Fit Me Fresh Tint, la nueva base de maquillaje de larga duración con alta cobertura y protector solar FPS 50, creada para todo tipo de piel y cuenta con ingredientes que controlan la oleosidad de la piel.",
    price: "$20.000",
    image: [baseFitMeImage1, baseFitMeImage2, baseFitMeImage3],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "103",
    name: "Labial Infalible de L´oreal Paris",
    description: "Labial líquido con acabado mate para tener un color duradero hasta por 16 horas. Fórmula con ácido hialurónico para una sensación cómoda y ligera en los labios. El nuevo labial líquido que resiste a todo y cuida tus labios. Infaillible Matte Resistance se presenta en 10 tonos para un color mate con pigmentos en polvo que dura hasta 16 horas. Su fórmula enriquecida con ácido hialurónico hidrata los labios y los mantiene cómodos durante todo el día. Fácil de aplicar, es a prueba de agua y resistente a la transferencia.",
    price: "$19.000",
    image: [labialInfalibleLoreal1Image, labialInfalibleLoreal2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "104",
    name: "Crema para peinar Elvive de L´oreal Paris",
    description: "¿Pelo deshidratado o pesado? Nuestra crema para peinar Elvive Hidra Hialurónico, formulada con Ácido Hialurónico y sin sal, recarga la fibra capilar con una hidratación intensa para una transformación instantánea.",
    price: "$11.000",
    image: cremaPeinarLorealImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "105",
    name: "Rimmel Air Volumen de L´oreal Paris",
    description: "La máscara de pestañas Air Volume 30H de L'Oréal Paris, ahora con una duración muy prolongada de hasta 30 horas. A su vez, este producto eleva las pestañas gracias a una tecnología de volumen de aire. Este acaba separando las pestañas dejándolas con un aspecto natural, más densas y con mucho volumen sin apelmazarlas. Además, su fórmula cremosa, liviana y de larga duración brinda una apariencia no solo natural, sino a prueba de escamas, gracias a la combinación única de ceras fijadoras e ingredientes hidratantes. Como beneficio adicional, para sentirte aún más MEGA, podés agregar más pasadas para un mega impacto! Este producto es hipoalergénico, probado para alergias y apto para ojos sensibles",
    price: "$20.000",
    image: [rimelAirVolumen1Image, rimelAirVolumen2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "106",
    name: "Lip Latex de Rimmel London",
    description: "BRILLO DE LÁTEX 3D EXTREMO CON COLOR IMPARABLE EN UNA SOLAPASADA.Consigue un look audaz e imparable en una sola pasada con RimmelThrill Seeker Lip Latex. Este labial líquido inunda tus labios con uncolor intenso y vibrante con un efecto duradero, que proporciona brilloinstantáneo, hidratación intensa, confort que dura todo el día y unacabado ultrasuave.El lápiz labial hialurónico con una fórmula vegana ligera que cuida loslabios, infundida con aloe vera, ácido hialurónico y vitamina E,proporciona un brillo suave y deja los labios hidratados.Con solo una pasada el color se desliza uniformemente.El aplicador con forma de diamante del lápiz labial Rimmel garantiza unalínea definida y una aplicación completa para una apariencia audaz",
    price: "$21.000",
    image: lipLatexImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "107",
    name: "Labial Thrili Seeker Glassy Gloss de Rimmel London",
    description: "Con el nuevo Thrill Seeker Glassy Gloss consigue unos labios rellenos y brillo al instante. Su fórmula contiene ácido hialurónico y un complejo antioxidante que aumenta la hidratación para unos labios instantáneamente hidratados, nutridos y con un aspecto saludable.",
    price: "$16.000",
    image: labialThriliSeekerImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "108",
    name: "Lip Oil Oh My Gloss de Rimmel London",
    description: "Hidrata tus labios con una explosión jugosa de brillo nutritivoutilizando el nuevo Oh My Gloss! ¡Una sensación adictiva y híbrida enlos labios! Restaura tus labios con un aceite rico que combina elacabado brillante de un brillo labial con el impulso de hidratación deun bálsamo labial, dejando un toque de color transparente eirresistibleen 5 sabores jugosos y deliciosos. Una fórmula que abraza los labios, infundida con una mezcla de activoshidratantes y antioxidantes que hidrata, conforta y deja tus labiosconuna apariencia irresistible: Suaves, sedosos y naturalmente rellenos.Se aplica con facilidad, deslizando suavemente con solo una pasada;esteaceite labial viene con un aplicador de punta en forma de doe-foot.Fórmula clara y no pegajosa",
    price: "$17.500",
    image: lipOilImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "109",
    name: "Mascarilla Argán BNC de Karseell",
    description: "La mascarilla capilar Karseell BNC es un tratamiento capilar de primera calidad diseñado para nutrir y restaurar profundamente el cabello.",
    price: "$33.000",
    image: mascarillaArganImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "110",
    name: "Protector Solar Facial con Color Dermaglós",
    description: "Hidrata con suave efecto luminoso. Previene manchas y arrugas. Testeado dermatológica y oftalmológicamente. Hipoalergenico y no comedogénico. Resistente al agua. Libre de gluten, apto para celíacos (Estudio de Determinación de Gliadinas).",
    price: "$20.000",
    image: protectorSolarDermaglosImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "111",
    name: "Sérum Anti-Manchas Glycolic Bright de L´oreal Paris",
    description: "Conocé el nuevo Sérum Glycolic Bright,  una formula exclusiva con ácido glicólico y niacinamida. Ayuda a prevenir y reducir en un 77%* las manchas por el sol, edad, imperfecciones e incluso las manchas persistentes. Sus activos trabajan sobre la corrección de 4 aspectos: la intensidad, la opacidad, el tamaño y la cantidad de manchas. Ideal para todos los tipos y tonos de piel.",
    price: "$23.000",
    image: serumAntiManchasImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "112",
    name: "Gel Miselar Limpiador Facial Rose Care de Nivea",
    description: "Rose Care Gel Limpiador Facial Micelar remueve suavemente el maquillaje a prueba de agua sin frotar. ¡Limpia profundamente y purifica la piel!",
    price: "$15.000",
    image: gelMiselarNiveaImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "113",
    name: "Sérum Facial de Cicatricure",
    description: "El nuevo serúm facial de Cicatricure Gold actúa sobre arrugas gravitacionales y líneas de expresión, su fórmula concentrada con péptidos con oro, calcio y silicio actúa con efecto lifting y se absorbe rápidamente, permitiendo una reparación más profunda de la piel en menos tiempo. Al instante su efecto tensor mejora la elasticidad y humectación de la piel y conforme pasan los días incrementa la firmeza, dando como resultado un rostro más definido. en sólo 2 semanas esculpe y reafirma la piel y reduce la aparición de arrugas gravitacionales. en 6 semanas 90% de las mujeres notaron su piel visiblemente más joven. Modo de Uso: aplícalo sobre rostro, cuello y escote perfectamente limpios. Dermatológicamente Testado.",
    price: "$20.000",
    image: serumCicatricureImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "114",
    name: "Paleta The City Mini de Maybelline",
    description: "La paleta City Mini propone 6 tonos dramáticos perfectos para crear looks de maquillaje de ojos personalizados.",
    price: "$22.000",
    image: paletaCityMiniImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "115",
    name: "Labial Mate INK de Maybelline",
    description: "El labial líquido Super Stay Matte Ink de Maybelline es tu mejor aliado para unos labios impactantes. Su fórmula altamente pigmentada ofrece un color intenso y mate que dura hasta 16 horas*, sin transferirse ni necesidad de retoques. Este labial es perfecto para cualquier ocasión, desde el día a día hasta eventos especiales. *Autoevaluación, 114 mujeres.",
    price: "$19.000",
    image: [labialMateInkImage1, labialMateInkImage2, labialMateInkImage3, labialMateInkImage4, labialMateInkImage5, labialMateInkImage6, labialMateInkImage7, labialMateInkImage8, labialMateInkImage9, labialMateInkImage10, labialMateInkImage11, labialMateInkImage12],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "116",
    name: "Bombshell Victoria´s Secret",
    description: "Flota en una nube de tu fragancia favorita. Nuestra mist ligero como el aire ofrece un refrescante toque de aroma. Audaz y confiado. La fragancia n.º 1 de Estados Unidos* es una mezcla chispeante de peonías recién cortadas y frutas exóticas al sol de la tarde. Aplica una capa encima de tu Loción de Fragancia a juego para una experiencia de fragancia duradera. Tipo de fragancia: Floral Frutal Notas: fruta de pasión morada, peonía de Shangri-La y orquídea de vainilla. El Mist es nuestra versión más ligera de la fragancia.",
    price: "$49.000",
    image: [bombshellVS1Image, bombshellVS2Image, bombshellVS3Image, bombshellVS4Image, bombshellVS5Image],
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Bombshell Intense", "Bombshell Original", "Bombshell Paradise", "Bombshell Magic"],
  },
  {
    id: "117",
    name: "Gel de Limpieza Ácido Hialurónico de L´oreal Paris",
    description: "Conocé el nuevo Gel de Limpieza de Revitalift, con Ácido Hialurónico. Limpia y purifica, sin resecar; mientras hidrata y rellena líneas de expresión. El Gel de Limpieza Revitalift de Ácido Hialurónico constituye el primer y fundamental paso en la rutina de cuidado facial. Elimina las impurezas del rostro sin resecar, resultando en una piel limpia y fresca. Además, gracias a su contenido de ácido hialurónico, hidrata en profundidad y rellena líneas de expresión.",
    price: "$15.000",
    image: gelAcidoHialuronicoImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "118",
    name: "Rimmel WONDER´FULL Lavable de Rimmel London",
    description: "Es una mascara de formula premium con oleo de Argan. Da volumen y acondiciona las pestañas sientiendolas suaves y flexibles, sin grumos. El cepillo Ultra Flex con cerdas ultrasuaves también abraza las pestañas definiéndolas desde la raíz hasta la punta. Es 100% a prueba de agua y de muy larga duración.",
    price: "$16.000",
    image: wonderfullRimmelImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "119",
    name: "Rimmel Sky High de Maybelline",
    description: "¡Lográ una longitud sin límites y un volumen redefinido en tus pestañas con la máscara Lash Sensational Sky High Waterproof! Su fórmula con pigmentos negros intensos, ¡es a prueba de agua y sudor! Su innovador cepillo cónico flexible alcanza todas y cada una de tus pestañas sin dejar grumos. Además, su fórmula con extracto de bambú es liviana y súper fácil de aplicar. ¡Lucí unas #PESTAÑASCONALTURA increíbles este verano, a prueba de agua!",
    price: "$22.000",
    image: [rimelSkyHighImage1, rimelSkyHighImage2],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "120",
    name: "Sérum Express Aclara Vitamina C Día de Garnier",
    description: "Sérum Noche con 10% de Vitamina C pura, logra una piel radiante, descansada y revitalizada desde la primera mañana. Reduce manchas, líneas de expresión y uniformiza el tono, durante la noche.",
    price: "$20.000",
    image: serumExpressAclaraDiaImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "121",
    name: "Gold Keratina de Karseell",
    description: "El tratamiento de queratina reparador con esencia de maca se puede utilizar para un tratamiento profundo del cabello dañado o seco. El tratamiento de queratina puede nutrir y reparar eficazmente el cabello encrespado, áspero y teñido y dejarlo liso y brillante. Perfecto para todo tipo de cabello.",
    price: "$36.000",
    image: goldKeratinaImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "122",
    name: "Delineador de Labios Lifter Liner de Maybelline",
    description: "¡Conocé el nuevo Lifter Liner de Maybelline NY! Formulado con ácido hialurónico, este delineador de labios ofrece un color cremoso y duradero, con sensación suave. Además, su punta afilable ofrece líneas ultra precisas y un deslizamiento suave. Lifter Liner está disponible en 6 tonos para infinitas posibilidades de combinación con tu Lifter Gloss favorito",
    price: "$15.000",
    image: [delineadorLifterImage1, delineadorLifterImage2],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "123",
    name: "Base Líquida SuperStay Lumi-Matte de Maybelline",
    description: "¡Nueva Superstay Lumi Matte, de Maybelline NY! Base de maquillaje líquida que se ve y se siente liviana, dejando la piel con un acabado luminoso a prueba de agua y transpiración.",
    price: "$22.000",
    image: baseSuperstayLumiImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "124",
    name: "Corrector de Ojeras Fit Me de Maybelline",
    description: "El corrector Maybelline Fit Me® para una cobertura impecable y natural. Este corrector sin aceite combina con los tonos de piel para lograr una tez más uniforme.",
    price: "$20.000",
    image: [correctorOjerasFitMeImage1, correctorOjerasFitMeImage2, correctorOjerasFitMeImage3, correctorOjerasFitMeImage4],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "125",
    name: "Crema Gel Facial de Cicatricure",
    description: "Cicatricure Crema Acqua Gel Facial es una crema con textura fluida de rápida absorción que cuida tu piel y la protege durante todo el día. Protege tu piel del sol con FPS 15. Hidrata por 24hs.",
    price: "$20.000",
    image: gelFacialCicatricureImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "126",
    name: "Sérum Facial de Dermaglós",
    description: "Incorporar serums a tu rutina facial aporta beneficios muy importantes para la salud y apariencia de tu piel. Uno de los beneficios de este tipo de fórmula es que sus ingredientes activos poseen una concentración más elevada que las cremas. Por este motivo, los resultados se observan en un periodo mucho más corto de tiempo.",
    price: "$20.000",
    image: [serumFacialDermaglos1Image, serumFacialDermaglos2Image, serumFacialDermaglos3Image, serumFacialDermaglos4Image],
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "127",
    name: "Rimmel Paradise Big Deal de L'Oréal Paris",
    description: "¡Hacé de tus pestañas algo grande con la nueva Máscara Paradise Big Deal lavable de L´Oréal Paris! Conseguí una longitud y un volumen excepcionales. Descubrí el nuevo cepillo cónico cruzado y no te saltees ni una pestaña. Sus cerdas cubren las pestañas uniformemente, una a una, desde la raíz hasta la punta, para una intensidad modulable sin grumos. Su fórmula te permite lucir unas pestañas voluminosas y suaves con un acabado ligero. Más que una máscara de pestañas, es una sensación. Testeada bajo control oftalmológico, apta para ojos sensibles y usuarios de lentes de contacto.",
    price: "$23.000",
    image: [rimmelParadiseBig1Image, rimmelParadiseBig2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "128",
    name: "Body Mist Pink",
    description: "¿Conocías los nuevos Body Mist Pink? Para cuerpo y cabello. Con ácido Hialurónico y Vitamina B5. Libre de alcohol. Consultar Fragancias en Stock.",
    price: "$32.000",
    image: [bodyMistPink1Image, bodyMistPink2Image, bodyMistPink3Image, bodyMistPink4Image, bodyMistPink5Image, bodyMistPink6Image, bodyMistPink7Image, bodyMistPink8Image, bodyMistPink9Image, bodyMistPink10Image],
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Fresh & Clean", "Warm & Cozy", "Sun Kissed", "Chill Coconut", "Beach Flower", "Cool & Bright", "Sweet & Flirty"],
  },
  {
    id: "129",
    name: "Lotion BombShell Victoria´s Secret",
    description: "Envuélvete en tu fragancia favorita. Nuestra loción de rápida absorción y nutritiva para la piel añade el toque perfecto de aroma. Potente y rico, Bombshell Intense es una mezcla decadente de peonía roja y frutas exuberosas. Consejo: Para una experiencia de fragancia de larga duración, combínala con Eau de Parfum o Fine Fragrance Mist a juego.",
    price: "$35.000",
    image: [lotionBombshellVS1Image, lotionBombshellVS2Image],
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Bombshell Intense", "Bombshell Original", "Bombshell Paradise"],
  },
  {
    id: "130",
    name: "Base Líquida SuperStay Active Wear de Maybelline",
    description: "La nueva base de maquillaje Superstay Active Wear permite conseguir hasta 30H de duración, desafiando roces, agua y transpiración. Esta base de alta cobertura deja un acabado mate, sin efecto acartonado. Y además, su textura es ultra ligera.",
    price: "$21.000",
    image: baseSuperstayAWImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "131",
    name: "Sérum Revitalif Ácido Hialurónico de L'Oréal Paris",
    description: "Serum rellenador con 1,5% de acido hialuronico puro. La mas alta concentracion de Acido hialuronico logrando -40% de lineas finas en 4 semanas. El Serum de Revitalift Acido hialuronico es un producto complementario a la rutina diaria. Tiene una concentracion de 1,5% de Acido Hialuronico Puro donde -40% de lineas de expresion visiblemente son reducidas en 4 semanas. Al aplicar el serum la piel se sentira hidratada, elsatica y fresca. En la semana 1, la piel luce radiante, se siente rellenada y firme. En la semana 2, las lineas de expresion se reducen (-19%) y las arrugas se reducen (-14%). Finalmente, en la cuarta semana las lineas de expresion se reducen (-40%) y las arrugasse reducen (-31%). Se recomienda utilizar el Serum cada mañana y noche, aplicando 2-3 gotas en el rostro y cuello, evitando el area de los ojos. Para mejores resultados, usa el resto de la gama Revitalift Acido hialuronico.",
    price: "$23.000",
    image: serumRevitalifAHImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "132",
    name: "Crema Facial de Día Essential 24HS de Nivea",
    description: "NIVEA Essentials 24H HIDRATACIÓN INTENSA + REFRESCANTE Crema Hidratante de Día con Vitamina E y Anti-Oxidante aporta humectación de rápida absorción, brinda hidratación duradera a tu rostro. Con su FPS 15 ayuda a proteger la piel contra los rayos del sol que causan envejecimiento prematuro. Refresca la piel gracias a su fórmula ligera.",
    price: "$15.000",
    image: niveaCremaEssentialImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "133",
    name: "Agua de Rosas Bifasica de Nivea",
    description: "NIVEA Rose Care Agua Micelar Bifásica para maquillaje a prueba de agua con Agua de Rosas Orgánica posee una fórmula que limpia profundamente y purifica, remueve efectivamente el maquillaje a prueba de agua, entrega hidratación inmediata y prolongada por 24 horas. Compatibilidad con la piel dermatológica y oftalmológicamente probada.",
    price: "$15.000",
    image: aguaRosasNiveaImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "134",
    name: "Agua Micelar de Garnier",
    description: "El Agua Micelar Bifásica desmaquilla, limpia y nutre en un solo gesto. Especial para maquillaje a prueba de agua: rostro, ojos y labios. Una fórmula que combina la eficacia de las micelas con el aceite de argán capturando las impurezas como un imán, incluso el maquilaje a prueba de agua, sin frotar.El aceite de argán es un óleo, conocido por sus propiedades nutritivas y reconfortantes. Combiná de acuerdo a tus necesidades, con el Agua Micelar Todo en 1 para todo tipo de pieles para refrescar y tonificar, o el Agua Micelar Pure Active para pieles mixtas a grasas para matificar y purificar. Sumá a tu rutina las cremas Hidratantes 3 en 1 de Garnier para todos los días, y las mascarillas hidratantes en tela Hidra Bomb de Garnier 1 vez a la semana.",
    price: "$16.000",
    image: [aguaMicelarGarnier1Image, aguaMicelarGarnier2Image, aguaMicelarGarnier3Image, aguaMicelarGarnier4Image, aguaMicelarGarnier5Image],
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "135",
    name: "Crema Revitalif Pro-Retinol de L'Oréal Paris",
    description: "Descubrí la nueva Crema Día Revitalift con PRO-RETINOL. Arrugas visiblemente reducidas en 8 semanas*. El pro-retinol es un activo antiedad derivado del Retinol que puede ser usado durante el día. Esta crema estimula la producción del colágeno, hidrata y ayuda a proteger gracias a su factor de protección.",
    price: "$23.500",
    image: proRetinolLorealImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "136",
    name: "Gel de Ducha Victoria´s Secret",
    description: "Relájate con nuestros geles corporales para ducha con aroma, exfoliantes y limpiadores.",
    price: "$32.000",
    image: [gelDuchaVS1Image, gelDuchaVS2Image],
    category: "Fragancias" as const,
    isNew: true,
  },
  {
    id: "137",
    name: "Gel de Limpieza Anti-Brillo de L'Oréal",
    description: "Conocé el nuevo Gel de Limpieza Revitalift Anti Brillo Formulado con Ácido Salicílico y Ácido Hialurónico. Limpia, Hidrata y Matifica. Ideal para pieles mixtas a grasas. El Gel de Limpieza Revitalift Anti Brillo constituye el primer y fundamental paso en la rutina de cuidado facial. Elimina las impurezas del rostro sin resecar, resultando en una piel limpia e hidratada. Además, gracias a su contenido de ácido salicílico mantiene la piel sin briilo y disminuye la visibilidad de los poros.",
    price: "$15.000",
    image: gelLimpiezaABImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "138",
    name: "Protector Solar Invisible Daily Fluid de Nivea",
    description: "El Protector solar facial NIVEA SUN Invisible Daily Fluid protege la piel saludable desde el exterior frente a los rayos UVA/UVB y frente a los efectos de la luz visible de alta energía, como el envejecimiento prematuro de la piel. Su fórmula contiene Licochalcona A, un potente antioxidante natural que activa el mecanismo de defensa propio de la piel, y Niacinamida, que proporciona una piel visiblemente sana y un tono uniforme. No es graso, no es pegajoso y no deja residuos blancos. Proporciona un efecto mate durante 8 horas para un aspecto sin brillo, una sensación de piel hidratada y un aspecto de piel visiblemente saludable. Contiene FPS 50 y es invisible con todos los tonos de piel. Es adecuado para todo tipo de pieles.",
    price: "$17.000",
    image: protectorSolarDailyImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "139",
    name: "Rimmel Telescopic de L'Oréal Paris",
    description: "¡Lleva tus pestañas al siguiente nivel con Telescopic Lift de L'Oréal Paris! Una mascara de pestañas que te da +5mm de alargamiento, volumen y curvatura al instante.",
    price: "$20.000",
    image: rimmelTelescopicImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "140",
    name: "Sérum Anti-Arrugas de Cicatricure",
    description: "Cicatricre Sérum Facial Anti-Arrugas es un sérum inteligente que, con 3X biotecnología molecular, tensa, tonifica y rellena tres tipos de arrugas (dinámicas, estáticas y mixtas) de manera significativa en 2 semanas. Su exclusiva fórmula cuenta con 5% de complejo de Ácido Hialurónico, proveniente de 3 fuentes, obtenido de procesos biotecnológicos de última generación, de distinto peso molecular para brindar una aplicación funcional y penetrar profundmante en las distintas capas de la epidemis, y 7% Niacinamida. DERMATOLÓGICAMENTE COMPROBADO. * Resultados con el uso continuo del producto. Estudios de eficacia cosmética instrumentales, clínicos y sensoriales.",
    price: "$20.000",
    image: serumAACicatricureImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "141",
    name: "Rubor Líquido Lumi Liquid Blush de L'oréal Paris",
    description: "Descubrí el nuevo Rubor líquido Lumi Liquid Blush de L'Oréal Parisysumale a tu look un toque de color. Su pigmentación intensa yradiantepermite lograr un acabado natural y luminoso. Textura ligera yde fácilaplicación. Apto para todo tipo de pielesAcabado glow y radiante. Fácil aplicación, con textura ligera. Aptaparapieles sensibles. Testeada dermatológicamente.",
    price: "$20.000",
    image: lumiLiquidBlushImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "142",
    name: "Absolut Repair Oil Professionnel de L'oréal Paris",
    description: "Spray profesional multi propósito 10-en-1 de aceite para cabello normal a sensibilizado. Enriquecido con aceite de germen de trigo. Una acción, 10 beneficios: 1-Nutrición 2-Reparación 3-Toque ligero 4-Suavidad 5-Ayuda a desenredar 6-Disciplina 7-Manejabilidad 8-Brillo 9-Protección 10-Ligereza.",
    price: "$36.000",
    image: absoluteOilImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "143",
    name: "Crema Fasial de Día Glycolic-Bright de L'oréal Paris",
    description: "La Crema de Día FPS30 Anti Manchas Glycolic Bright, formulada con ácido glicólico y niacinamida, ayuda a reducir y prevenir las manchas en la piel. Contiene alta protección solar FPS30, protegiendo la piel de los rayos UVB y UVA, para evitar manchas causadas por el sol y líneas de expresión. Su aplicación diaria logra una piel notoriamente más radiante y uniforme en tan solo 7 días.",
    price: "$22.000",
    image: glycolicBrightImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "144",
    name: "Limpiador Purificante Express Ackara de Garnier",
    description: "Nuevo Gel de Limpieza Anti Imperfecciones para piel mixta, grasa o con tendencia al acné. Limpia en profundidad y ayuda a reducir imperfecciones y manchas en la piel. Con Acido Salicilico y Vitamina C.",
    price: "$20.000",
    image: expressAclaraGarnierImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "145",
    name: "Sérum Rellenador de Ojos Revitalif de L'oréal Paris",
    description: "Conocé el nuevo Serum para Ojos de Revitalift Ácido Hialurónico, ideal para lucir una mirada 5 años más joven en 2 semanas*. Formulado con 1,5% de Ácido Hialurónico, activo que hidrata profundamente la piel del contorno de ojos y rellena las líneas de expresión que se ubican allí. También contiene un 1% de cafeína pura, capaz de impulsar la microcirculación y reducir la retención de líquidos, lo que ayuda a disminuir las bolsas y las ojeras oscuras. Además contiene otros activos como niacinamida, glicerina, vitamina cG y H.E.P.E.S y cuenta con un triple aplicador metálico que genera un efecto frío e instantáneo y permite masajear la zona de los ojos, incluyendo los parpados. Su utilización diaria resulta en una mirada más fresca e hidratada.",
    price: "$23.000",
    image: serumOjosRevitalifImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "146",
    name: "Rimmel Fire Work Electro Black de Maybelline",
    description: "Transformá tu mirada con la nueva máscara Lash Sensational Firework Electro Black a prueba de agua para lograr un efecto de pestañas explosivas ahora con acabado negro eléctrico. Disfrutá de una mirada espectacular hasta por 24 horas sin perder volumen y longitud. Resistente al agua.",
    price: "$24.000",
    image: rimmelElectroBlackImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "147",
    name: "Sombra Líquida BRILLIANT EYES de L'oréal Paris",
    description: "¿Querés unos ojos brillantes? Cubrí tus párpados de un brillo resplandeciente con L'Oréal Paris Brilliant Eyes. ¡Esta sombra de ojos líquida de gran impacto y brillo permanece inalterable durante todo el día! Brilliant Eyes no transfiere y dura hasta 16hs. Los pigmentos perlados luminosos son ligeros, resistentes a las arrugas y no grasos para un uso cómodo. Con una sola pasada, el suave aplicador deposita la cantidad justa de producto en los párpados para obtener un alto nivel de brillo y una aplicación de fácil difuminación. Disponible en 6 tonos, podés personalizar tu look de párpados brillantes combinándolos, aumentando la intensidad o simplemente usando tus tonos favoritos solos para conseguir un look de día o de noche.",
    price: "$19.000",
    image: [brilliantEyes1Image, brilliantEyes2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "148",
    name: "Rimmel Sky High BLACK de Maybelline",
    description: "¡Lográ una longitud sin límites y un volumen redefinido en tus pestañas con la máscara Lash Sensational Sky High Waterproof! Su fórmula con pigmentos negros intensos, ¡es a prueba de agua y sudor! Su innovador cepillo cónico flexible alcanza todas y cada una de tus pestañas sin dejar grumos. Además, su fórmula con extracto de bambú es liviana y súper fácil de aplicar. ¡Lucí unas #PESTAÑASCONALTURA increíbles este verano, a prueba de agua!",
    price: "$22.000",
    image: rimmelSkyHighBlackImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "149",
    name: "Body Oil Victoria´s Secret",
    description: "Un nuevo tipo de ritual Nuestra fórmula suave hecha con aceite de jojoba se absorbe rápidamente para lograr una piel lisa y de aspecto saludable. Parte de la colección de cuidado corporal Belleza natural, se inspira en la naturaleza con el fin de conseguir una piel suave y sana. Fragancia y beneficios. Fórmulas lujosas y eficaces. Inspiración botánica, transformación para el día a día.",
    price: "$30.000",
    image: bodyOilJojobaImage,
    category: "Fragancias" as const,
    isNew: true,
  },
  {
    id: "150",
    name: "Crema Gel Despigmentante de Dermaglós",
    description: "Especialmente formulada para ayudar a reducir la sobreproducción de melanina, responsable de la hiperpigmentación. Ayuda a reducir manchas y evitar nuevas apariciones. Hidrata, ilumina y unifica el tono de la piel.",
    price: "$20.000",
    image: gelDespigmentanteImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "151",
    name: "Gel Limpiador Express Aclara de Garnier",
    description: "Gel Limpiador Vitamina C Express Aclara de Garnier es un producto diseñado para formar parte de tu rutina de limpieza facial diaria. Su fórmula ayuda a eliminar impurezas y residuos sin afectar el equilibrio natural de la piel, proporcionando una sensación de frescura y confort. Beneficios del Gel Limpiador Vitamina C Express Aclara de Garnier son: Brinda una sensación de limpieza y frescura. Ayuda a mejorar el aspecto uniforme de la piel. Contribuye a mantener la hidratación sin efecto graso. Cómo aplicar el Gel Limpiador Vitamina C Express Aclara de Garnier Correctamente: Humedece tu rostro y aplica una pequeña cantidad del gel, evitando el contorno de ojos. Masajea suavemente con movimientos circulares. Enjuaga con abundante agua y seca con ligeros toques. Úsalo mañana y noche para mejores resultados. Para potenciar el efecto, complementa con la gama Garnier Express Aclara.",
    price: "$16.000",
    image: limpiadorExpressAclaraImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "152",
    name: "Desmaquillante Bifasico de Ojos PIEL SENSIBLE de NIVEA",
    description: "NIVEA Desmaquillante bifásico de ojos enriquecido con aceite de semillas de girasol que elimina eficazmente el maquillaje y la máscara de pestañas resistente al agua sin necesidad de frotar. Protege las pestañas sensibles gracias a su fórmula bifásica. Compatibilidad dermatológica y oftalmológicamente probada. La fórmula es vegana y la botella está fabricada con un 96% de material reciclado.",
    price: "$12.000",
    image: desmaquillantePielSensibleImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "153",
    name: "Rimmel The Falsies Falsche Wimpern de Maybelline",
    description: "Volum' Express The Falsies Mascara crea unas pestañas más llamativas y glamorosas. La fórmula a prueba de grumos brinda unas pestañas más largas, más rellenas y más gruesas para lucir un volumen dramático. Crea unas pestañas llamativas para obtener el estilo glamoroso de las pestañas postizas con Volum' Express The Falsies Mascara. La fórmula única con fibras de keratina a prueba de grumos aumenta el volumen al instante 8 veces más para lograr el efecto The Falsies. Esta mascara alargadora tiene el cepillo patentado de Maybelline estilo cuchara flexible para levantar y separar las pestañas y obtener un estilo más tupido. La fórmula está probada por oftalmólogos y es segura para quienes usan lentes de contacto.",
    price: "$17.000",
    image: rimmelFalscheImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "154",
    name: "Labial SUPERSTAY VINYL INK de Maybelline",
    description: "El labial líquido SuperStay Vinyl Ink le da a tus labios un efecto vinilo de larga duración. Conseguí un brillo instantáneo que dura hasta 16 horas. ¡Animáte a lucir unos labios de impacto!",
    price: "$22.000",
    image: [superstayVinylInk1Image, superstayVinylInk2Image, superstayVinylInk3Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "155",
    name: "Sérum Express Aclara Vitamina C de Garnier",
    description: "Sérum Anti Imperfecciones para piel con tendencia al acné o para pieles mixtas con tendencia oleosa. Tratamiento concentrado formulado con Ácido Salicílico, Vitamina C°, AHA, y Niacinamida para tratar imperfecciones y manchas.",
    price: "$21.500",
    image: serumExpressAclaraGarnierImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "156",
    name: "Sérum Express Aclara Vitamina C Noche de Garnier",
    description: "Sérum Noche con 10% de Vitamina C pura, logra una piel radiante, descansada y revitalizada desde la primera mañana. Reduce manchas, líneas de expresión y uniformiza el tono, durante la noche.",
    price: "$21.000",
    image: serumExpressAclaraNocheImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "157",
    name: "Sérum Anti-Ojeras Glycolic-Bright de L'oréal Paris",
    description: "Nuevo Sérum Ojos Anti-Ojeras Glycolic Bright para despertar con una mirada más radiante día tras día. Con 3% de Ácido Glicólico + Niacinamida + Vitamina C, su fórmula logra que el contorno de ojo se vea más luminoso, dejando en la piel una sensación refrescante.",
    price: "$22.000",
    image: serumAOGBImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "158",
    name: "Protector Solar LUMINOUS Anti-Manchas de NIVEA",
    description: "PROTECCIÓN EXTRA La fórmula extra protectora, pero ligera, está enriquecida con: Ingrediente antimanchas patentado LUMINOUS630® Doble concentración de Vitamina E¹ Ácido Hialurónico activador celular² Filtros UVA/UVB UNA INNOVACIÓN REVOLUCIONARIA, CON 10 AÑOS DE INVESTIGACIÓN A los científicos de NIVEA® les tomó 10 años de meticulosa investigación y la evaluación de 50.000 ingredientes para encontrar el ingrediente antimanchas altamente efectivo y patentado: LUMINOUS630®, que actúa a nivel celular. RESULTADOS COMPROBADOS La piel está protegida del sol y del fotoenvejecimiento. La piel se siente hidratada, matificada y más suave. Las manchas se reducen y se previene su reaparición. La textura mejora, el tono se ve más parejo y luminoso. Comparado con la fórmula anterior de LUMINOUS630® Fluido de Día FPS50. Estudio in vitro.",
    price: "$18.000",
    image: protectorSolarLuminousImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "159",
    name: "Cera de Karseell",
    description: "Descubra la elegancia y definición suprema para su cabello con la Cera Capilar Karseell Maca Essence Repair, un producto exclusivo que ofrece máxima fijación y un acabado de alto brillo que realza cada estilo con sofisticación.",
    price: "$20.000",
    image: ceraKarseellImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "160",
    name: "Rimmel Sky High LASH SENSATIONAL DIAMOND de Maybelline",
    description: "¡Lográ una longitud sin límites y un volumen redefinido en tus pestañas con la máscara Lash Sensational Sky High Waterproof! Su fórmula con pigmentos negros intensos, ¡es a prueba de agua y sudor! Su innovador cepillo cónico flexible alcanza todas y cada una de tus pestañas sin dejar grumos. Además, su fórmula con extracto de bambú es liviana y súper fácil de aplicar. ¡Lucí unas #PESTAÑASCONALTURA increíbles este verano, a prueba de agua!",
    price: "$20.000",
    image: rimmelSkyHighDiamondImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "161",
    name: "Sérum Anti-Arrugas de NIVEA",
    description: "El Sérum Facial Doble Acción Q10 Anti Arrugas Expert ha sido desarrollado para reducir las arrugas existentes y prevenir la formación de otras nuevas con resultados clínicamente probados en tan solo 2 semanas. Su fórmula contiene GLYCOSTOP, actúa como un escudo que protege la piel del daño de la glicación. Es 4 veces más poderosa que usar una crema de día sola y sirve idealmente como base de maquillaje. Clínicamente probado.",
    price: "$18.000",
    image: serumAntiArrugasNiveaImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "162",
    name: "Sérum Protector Solar UV DEFENDER de L'oréal Paris",
    description: "El UV Defender Sérum Invisible Protector Solar FPS 50+ es mucho más que un protector solar tradicional. Su innovadora fórmula en formato sérum combina la más alta protección contra los rayos UVA y UVB con una textura ultra ligera que se adapta a todo tipo de piel, incluso las más sensibles. Gracias a su rápida absorción y acabado invisible, no deja residuos blancos ni sensación pegajosa. Además, su fórmula no comedogénica lo convierte en una opción ideal para piel grasa o mixta, mientras que su contenido en ácido hialurónico proporciona hidratación para piel seca o deshidratada. ¿El resultado? Protección diaria efectiva y un rostro suave, listo para aplicar maquillaje o continuar tu rutina de cuidado.",
    price: "$22.000",
    image: serumUVDefenderImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "163",
    name: "Óleo + Sérum Bifasico de Dove",
    description: "El nuevo Óleo + Serum Bifásico Dove Bond Intense Repair de 110 ml es una innovadora solución para el cuidado del cabello, diseñada para mujeres que buscan reparar los daños acumulados en su pelo. Este producto combina una tecnología patentada con un 7% de Péptido Complex, ofreciendo una nutrición profunda y realzando la vitalidad del cabello. Su textura ultra liviana facilita su aplicación y rápida absorción sin dejar residuos grasos, y su fórmula bifásica proporciona un doble poder renovador, haciendo que el cabello se sienta más fuerte y saludable desde el primer uso. Con el óleo + serum Bifásico Dove Bond Intense Repair, se pueden experimentar hasta diez beneficios diferentes, incluyendo un cabello cuatro veces más fuerte y una reducción del 91% de las puntas abiertas. Además, este producto, controla el frizz durante 72 horas, proporciona un brillo extra que dura hasta 48 horas y protege contra futuros daños y el calor del styling. Este producto no solo realza el color natural del cabello, sino que también devuelve su movimiento natural y ofrece un blindaje completo. Para aplicarlo, simplemente agita el frasco, coloca el producto en tus manos y distribúyelo en el cabello, enfocándote en medios a puntas. Si lo prefieres, puedes aplicarlo directamente sobre el cabello.",
    price: "$15.000",
    image: oleoSerumDoveImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "164",
    name: "Kit TRAVEL de Karsell",
    description: "a mascarilla capilar de colágeno Karseell contiene colágeno, aceite de argán, maca y hierbas naturales para reparar profundamente el cabello seco y dañado. Set de champú y acondicionador voluminizador Al hidratar el cabello, lo hace lucir más abundante e hidratado, mejorando así la apariencia del cabello. Imprescindibles para las vacaciones: Este set de champú y acondicionador, que cumple con las normas de la TSA, incluye un kit de viaje con mascarilla capilar. Incluye: mascarilla capilar de 100 ml, champú voluminizador de 70 ml y acondicionador reparador de 70 ml. Artículos de tocador de tamaño de viaje para mujeres: ideales para regalos de vacaciones y cumpleaños, rellenos de medias, kits de gimnasio, viajes de negocios, vacaciones, viajes de avión con equipaje de mano, emergencias relacionadas con el clima, estudiantes universitarios ocupados y regalos del Día de la Madre, y es un gran complemento para cualquier viaje. Karseell Hair Care se esfuerza por brindarles a los clientes la mejor experiencia de servicio. Si hay algún problema con los juegos de champú y acondicionador",
    price: "$32.000",
    image: kitTravelKarseellImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "165",
    name: "Corrector de Ojeras True Match de L'oréal Paris",
    description: "Un corrector con ácido hialurónico de cobertura media que neutraliza las ojeras y reduce visiblemente las bolsas. Esta fórmula no contiene perfume ni parabenos, es no comedogénica y vegana. La rutina de cuidado de la piel se une a la de maquillaje con el Serum Corrector Luminoso True Match de L'Oréal París. Este corrector multiusos, infusionado con ácido hialurónico y cafeína, puede usarse para disimular imperfecciones, como contorno o iluminador facial, y al mismo tiempo hidratar la piel como tu sérum favorito.",
    price: "$22.000",
    image: correctorTrueMatchImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "166",
    name: "Base Líquida FIT ME de Maybelline",
    description: "La base Fit Me Matte + Poreless cubre imperfecciones, desvanece los poros y controla el brillo para darle a tu rostro un efecto natural e impecable. En su nuevo pack, ahora cuenta con FPS 22 y 16 hs de control de brillo",
    price: "$22.000",
    image: [baseFitMe2Image1, baseFitMe2Image2],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "167",
    name: "Corrector de Ojeras SUPERSTAY Active Wear de Maybelline",
    description: "El corrector Super Stay Active Wear ofrece hasta 30 horas de duración y cobertura completa mate de aspecto y sensación natural. Para una transformación drástica, usa este corrector de larga duración resistente a la transferencia. La fórmula ligera no se arruga ni se cuartea.",
    price: "$16.000",
    image: correctorSuperstayAWImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "168",
    name: "Base Líquida Lasting Finish de Rimmel London",
    description: "Consegui una hidratación insuperable y una duración de hasta 35 horas con Lasting Finish 35 Hour Foundation, la base de maquillaje de larga duración más hidratante de Rimmel. Esta base de maquillaje de alta cobertura tiene un acabado de aspecto natural y está clínicamente probado que mejora el aspecto de la piel. Una base de maquillaje con una fórmula vegana y sin crueldad animal.",
    price: "$21.000",
    image: [baseLastingFinishImage1, baseLastingFinishImage2, baseLastingFinishImage3, baseLastingFinishImage4],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "169",
    name: "Sérum Glycolic Gloss ELVIVE de L'oréal Paris",
    description: "Nuestro Sérum Extension de Brillo es tu aliado para reparar el pelo y prolongar el resultado de brillo extremo hasta 72 horas*. Nuestra innovadora fórmula enriquecida con 3% [Complejo con Ácido Glicolico] y filtro UV tiene una triple acción: Sella intensamente y rellena los defectos de la fibra capilar. En la superficie, lamina la cutícula, para reflejar la luz. Protege el pelo contra futuras agresiones externas. Pelo visiblemente sano y laminado para un brillo extremo.",
    price: "$15.000",
    image: serumGlycolicGlossImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "170",
    name: "Mist Facial Hidratante ROSE CARE de NIVEA",
    description: "NIVEA Rose Care Mist Refrescante Facial con Agua de Rosas Orgánica. ¡Tu mejor aliado para una piel siempre hidratada y fresca! Viene en formato spray y es muy práctico de llevar y tener siempre en la cartera, para refrescar e hidratar el rostro en todo momento del día. Brinda hidratación inmediata, intensa y duradera a la piel con el uso regular, y refresca el rostro, proporcionándole suavidad. Se puede usar antes del maquillaje, para preparar la piel, y volver a aplicar durante el día, cada vez que necesites un poco de hidratación y para darle una mayor duración al maquillaje. ¡Llevalo siempre con vos!",
    price: "$15.000",
    image: mistRoseCareImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "171",
    name: "Labial RICHE de L'oréal Paris",
    description: "Labial en barra de larga duración con acabado ultra matte y efecto de volumen intenso en los labios. No transfiere y hasta 16 horas de color e hidratación Color Riche Intense Volume Matte llega con su nueva fórmula con ácido hialurónico, 16 horas de duración y acabado Mate. Con su fórmula de ácido hialurónico hace que los labios se sientan cómodos y se vean más llenos durante todo el día. Acabado mate, efecto ligero y cremoso. Resiste a la transferencia. Nuevo envase mas sofisticado, permite una aplicación mas sencilla y precisa para acentuar la forma de los labios. Disponible en 8 tonos.",
    price: "$18.000",
    image: [labialRiche1Image, labialRiche2Image, labialRiche3Image, labialRiche4Image, labialRiche5Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "172",
    name: "BLUSH PARADISE de L'oréal Paris",
    description: "DescubrÍ el rubor universal de la gama Paradise de L'Oreal Paris. Con un 96% de ingredientes de origen natural aporta un toque de color a tu piel con un tono y aroma espectacular, nuestra primera gama de maquillaje con ingredientes de origen natural para un aspecto saludable. El colorete universal, con un 96% de ingredientes de origen natural, e infusionado con aceites de coco, melocotón, mantecas de cacao y mango, aporta un toque de color para un acabado natural, con un aroma espectacular. Consigue un efecto buena cara durante todo el año en 3 pasos: broncea, da color y e ilumina.",
    price: "$19.000",
    image: [blushParadise1Image, blushParadise2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "173",
    name: "Base en Polvo FIT ME de Maybelline",
    description: "Nueva base de maquillaje en Polvo, Fit Me! Powder Foundation, da un efecto mate que controla el brillo de la piel hasta por 24 horas. Es a prueba de agua, sudor y no se transfiere. Será tu nueva base de maquillaje en polvo favorita, consigue la cobertura de una base de maquillaje líquida y lo matificante de un polvo compacto. Además tiene FPS 44 para mantener tu acabado natural mate pero sobre todo cuidar tu piel de los rayos UV durante todo el día.",
    price: "$20.500",
    image: [basePolvoFitMe1Image, basePolvoFitMe2Image, basePolvoFitMe3Image, basePolvoFitMe4Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "174",
    name: "Labial GLOSS PARADISE de L'oréal Paris",
    description: "El nuevo Glow Paradise Gloss de L'Oréal Paris actúa como un 2 en 1: intensifica el color de tus labios como un labial y aporta una hidratación intensa a tus labios. Consigue unos labios suaves e hidratados gracias a su fórmula enriquecida hasta con un 98% de ingredientes naturales que mejora la apariencia de los labios y aporta un brillo natural. - Intensifica el color de tus labios - Mejora la apariencia de los labios - Hidratación intensa - Efecto volumen - Ingredientes naturales Disponible en 5 tonos",
    price: "$18.000",
    image: labialGlossParadiseImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "175",
    name: "Rimmel Sky High LAST SENSATIONAL PRIMER WHITE de Maybelline",
    description: "¡Potencia a la vez que cuidas tus pestañas con Sky High Primer! Gracias a su aplicador flexible de forma cónica alcanza, separa y extiende cada pestaña, incluso las más cortas. Lograrás unas pestañas con una longitud sin límites y un volumen redefinido, desde cada ángulo. Tendrás unas pestañas más cuidadas en 4 semanas gracias a su fórmula enriquecida con Ceramida y Pro-Vitamina B5.",
    price: "$22.000",
    image: rimmelPremierWhiteImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "176",
    name: "Sérum Rellenador Expert Filler de NIVEA",
    description: "CELLULAR EXPERT FILLER Serum rellenador es una solución avanzada para activar las células de la piel* y hacer retroceder los signos del envejecimiento. Descubra la fórmula de sérum ligera, de rápida absorción y no pegajosa que contiene una potente solución rellenadora al 20% compuesta por: MICROÁCIDO HIALURÓNICO PURO, potente molécula hidratante que se encuentra de forma natural en la piel. Se sabe que mejora la propia retención de hidratación de la piel y la rellena visiblemente. Moléculas 40 veces más pequeñas que penetran en las capas más profundas de la piel1 para rellenar eficazmente las arrugas. La GLICERINA, que se encuentra de forma natural en la piel, es conocida por suavizar y mantener la piel elástica y fresca durante más tiempo.",
    price: "$20.000",
    image: serumExpertFillerImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "177",
    name: "Paleta THE BURGUNDY BAR de Maybelline",
    description: "The Burgundy Bar es una palette de 12 sombras de granates & nudes. ¿Te atreves? Combina los 12 tonos mates y brillantes para un look nude con un toque de cálidos granates.",
    price: "$25.000",
    image: theBurgundyBarImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "178",
    name: "SPLASH PINK",
    description: "Frescura y aroma que te acompaña todo el día! Este  splash corporal PINK te envuelve en una fragancia irresistible. Perfecta  para cualquier ocasión. Consultar Fragancias en Stock.",
    price: "$16.000",
    image: [splashPinkVS1Image, splashPinkVS2Image, splashPinkVS3Image, splashPinkVS4Image],
    category: "Fragancias" as const,
    isNew: true,
  },
  {
    id: "179",
    name: "Sérum Dream Liso Elvive de L'oréal Paris",
    description: "El Sérum de Elvive Dream Liso, es un tratamiento de alisado en casa potencializado con [Keratina V* + AHA]. Su fórmula se activa con calor para alisar el pelo y controlar el frizz, creando una barrera protectora anti-humedad.",
    price: "$20.000",
    image: serumDreamLisoImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "180",
    name: "KERATINA de Karseell",
    description: "El tratamiento Alisador de Keratina con Colágeno y Biotina Karseell ayuda a que el cabello quede liso, suave y brillante. Este frasco de 500 ml combina queratina, colágeno y biotina para mejorar la salud y el aspecto de tu cabello.",
    price: "$33.000",
    image: keratinaKarseellImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "181",
    name: "Body Lotion PINK Victoria´s Secret",
    description: "Fresca. Soñadora. Acogedora. ¡Y más allá! Esta fórmula brinda 24 horas de hidratación para una piel suave y perfumada. Acompáñalo con tu mist favorito y crea tu ambiente #bestself. Suaviza. Ama. Repite. CONSULTAR FRAGANCIAS EN STOCK.",
    price: "$30.000",
    image: [lotionPinkVS1Image, lotionPinkVS2Image, lotionPinkVS3Image, lotionPinkVS4Image],
    category: "Fragancias" as const,
    isNew: true,
  },
  {
    id: "182",
    name: "Rimmel PANORAMA de L'oréal Paris",
    description: "Abrí tu mirada a una nueva dimensión con Panorama, la máscara de pestañas de L'Oréal Paris que llegó para revolucionar tu maquillaje. ¿Lista para una mirada panorámica? Su fórmula con 5% de complejo StretchFlex envuelve cada pestaña con un velo ultra negro que se flexiona sin límites, creando un volumen espectacular y una profundidad irresistible. Su secreto: un cepillo múltiple de última generación. Las cerdas cortas cargan las pestañas de volumen intenso, mientras que las cerdas largas despliegan las pestañas desde la raíz hasta las puntas como un abanico, logrando una mirada visiblemente más grande y definida.",
    price: "$23.000",
    image: rimmelPanoramaImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "183",
    name: "Labial Lifter Gloss de Maybelline",
    description: "Lifter Gloss Bronzed de Maybelline NY consigue labios brillantes y bronceados con apariencia redensificada. Sin relleno. Ahora en 5 tonos bronceados inspirados en la hora dorada, esta fórmula de brillo labial con ácido hialurónico aporta una hidratación duradera y labios más carnosos.",
    price: "$22.000",
    image: [lifterGloss1Image, lifterGloss2Image, lifterGloss3Image, lifterGloss4Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "184",
    name: "Base Líquida Infalible Matte Cover de L'oréal Paris",
    description: "Alta cobertura mate en una textura ultra fluida que se adapta a tu piel para un acabado natural. Alta cobertura mate - Textura ultra fluída - Acabado natural - Sin sensación grasa - Resistente al agua - Resistente a la transpiración - Resistente al calor - Con Protección solar.",
    price: "$22.000",
    image: baseInfalibleMatteImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "185",
    name: "Protector Solar UV DEFENDER Fluido con Color de L'oréal Paris",
    description: "El nuevo UV Defender Fluido Invisible FPS50+ protege tu piel diariamente de los rayos UVB y UVA, evitando el cáncer de piel, y la aparición de manchas, arrugas y líneas de expresión. Su textura 11 veces más ligera lo hace apto para todo tipo de piel, incluso las pieles mixtas a grasas. Ahora también en tono claro y medio. Protector solar FPS50+, de textura 11 veces más ligera* y muy alta resistencia. Creado con Tecnología Patentada, el UV Defender Fluido Invisible resiste al agua y al sudor, con textura fluida, lo que lo hace ideal para pieles mixtas a grasas. Formulado con Ácido Hialurónico, activo antiedad que hidrata profundamente la piel, al rellenar líneas de expresión. El protector solar constituye el paso fundamental en tu rutina de cuidado de la piel, protegiéndola de los rayos UVA y UVB; su utilización diaria previene quemaduras, cáncer de piel y la aparición de líneas de expresión, arrugas y manchas oscuras. *Que un protector solar clásico. Prueba sensorial frente al protector solar L'Oréal Paris UV Defender SPF 50+ hidratación intensa.°Estudio clínico, uso diario. Equivalente en edad de la mejora de la apariencia del contraste y la densidad de las manchas oscuras inducidas por los rayos UV.",
    price: "$22.000",
    image: uvDefenderColorImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "186",
    name: "Labial Lifter Plump de Maybelline",
    description: "Advertencia: Calor intenso. Volumen duradero. Conocé el nuevo Lifter Plump de Maybelline NY. Formulado con Maxi Lip™ y chile, brinda una intensa sensación picante y un efecto voluminizador al instante.",
    price: "$22.000",
    image: lifterPlumpImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "187",
    name: "Gel-Crema Glycolic-Bright Anti-Manchas Noche de L'oréal Paris",
    description: "El Gel Crema de Noche Anti Manchas reduce visiblemente las manchas durante la noche. Su fórmula exclusiva combina dos de los activos más eficaces contra las manchas: acido glicólico y niacinamida. Además, su textura en gel con micro capsulas, se fusiona con la piel para liberar vitamina E. Obtené una piel más radiante en 1 noche y disminuí visiblemente las manchas en tan solo 7 noches.",
    price: "$23.000",
    image: gelCremaGBNocheImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "188",
    name: "Corrector de Ojeras Infallible 24H de L'oréal Paris",
    description: "El corrector Infallible Full Wear es más que un corrector. El tamaño de su cepillo hace que puedas usarlo para cubrir ojeras, imperfecciones o como base de tu maquillaje. 24hs de cobertura para un resultado súper natural. Todo tipo de piel. Se puede usar en todo el rostro. Cubre imperfecciones. Permite cubrir ojeras, imperfecciones o ser utilizado como base de maquillaje. • 24hs de cobertura para un resultado súper natural. • Apto para todo tipo de piel. • Cubre imperfecciones. • Textura líquida.",
    price: "$22.000",
    image: correctorInfalible24Image,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "189",
    name: "Agua Micelar Bifasica & Revitalif de L'oréal Paris",
    description: "Limpia y elimina el maquillaje resistente al agua. Los Laboratorios L'Oréal Paris crearon un Agua Micellar bifasica, para una eliminación de maquillaje ultra efectiva que deja la piel con una sensación limpia y suave sin residuos grasos. UNA FASE DE ACEITE para disolver instantáneamente el maquillaje resistente e impermeable. UNA FASE DE AGUA MICELAR para capturar impurezas. Agua Micelar con Ácido Hialurónico Puro. Limpia, desmaquilla e hidrata intensamente rellenando líneas de expresión en un solo paso. Sin perfume, ni alcohol. Hipoalergénica y para todo tipo de piel. El tratamiento de las líneas de expresión inicia con la limpieza, nueva agua micelar con Ácido Hialurónico hecha para todo tipo de piel, sin dejar sensación grasosa e hipoalergénica. El Agua Micelar forma micelas, esferas microscópicas que encapsulan y remueven los rastros de maquillaje e impurezas. Su fórmula enriquecida con Ácido Hialurónico Puro cumple acción 3 en 1: limpia, purifica y rellena la piel con hidratación. En un solo paso, el Agua Micelar con Ácido Hialurónico limpia y remueve eficazmente el maquillaje de rostro, ojos y labios sin resecar la piel.",
    price: "$15.000",
    image: aguaMicelarBifasicaImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "190",
    name: "Base Correctora SKIN INK de L'oréal Paris",
    description: "¡Conocé el futuro de la larga duración con el nuevo lanzamiento de L'Oréal Paris, Infallible Skin Ink! Nuestra primera Base de Maquillaje y Corrector 2 en 1 es de larga duración hasta por 48h* para que tu maquillaje dure hasta que vos lo decidas, además de ser resistente a transferencias, agua, sudor y calor. Su fórmula es flexible para poder tener una cobertura construible pero sentirla tan ligera como una tinta. Cuenta con un aplicador multi-uso, amplio para aplicar en todo el rostro y con una punta precisa para aplicar en zonas puntuales. Disponible en 5 tonos.",
    price: "$30.000",
    image: [baseSkinInk1Image, baseSkinInk2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "191",
    name: "Shampoo Matizador de Karseell",
    description: "✔ HIDRATA Y NUTRE | El aceite de argán es rico en vitamina E. Puede reparar las puntas abiertas del cabello, humectarlo y darle un brillo resplandeciente. Es un excelente ingrediente para hidratar el cabello y protegerlo contra los daños de los rayos UV. ✔ INGREDIENTES DE ALTA CALIDAD | Elaborado con ingredientes de alta calidad de hierbas seleccionadas de todo el mundo. El champú con aceite de argán Karseell está hecho con ingredientes naturales que curan tu cabello. ✔ ELECCIÓN DE SALÓN | Champú hidratante de calidad de salón profesional para cabello seco para tu peinado. ✔ AROMA DE FÓRMULA ITALIANA | Aroma encantador, perfume de fórmula italiana, contiene aceite de argán y extracto de aceite de coco.",
    price: "$30.000",
    image: shampooMatizadorImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "192",
    name: "Labial Infallible de L'oréal Paris",
    description: "Labial líquido con acabado mate para tener un color duradero hasta por 16 horas. Fórmula con ácido hialurónico para una sensación cómoda y ligera en los labios. ¿Un labial líquido mate que se sienta cómodo en tus labios y sea de larga duración? Descubrí Infallible Matte Resistance, el nuevo labial líquido que resiste a todo y cuida tus labios. Infaillible Matte Resistance se presenta en 10 tonos para un color mate con pigmentos en polvo que dura hasta 16 horas. Su fórmula enriquecida con ácido hialurónico hidrata los labios y los mantiene cómodos durante todo el día. Fácil de aplicar, es a prueba de agua y resistente a la transferencia.",
    price: "$19.000",
    image: [labialInfalibleLoreal1Image, labialInfalibleLoreal2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "193",
    name: "Delineador HYPER PRECISE de Maybelline",
    description: "¡El delineador de ojos Hyper Precise All Day con punta precisa y duración 24 h. No se corre, no mancha y es waterproof. Su punta precisa de 0,4 mm de grosor permite una precisión absoluta para conseguir un trazo definido.",
    price: "$16.000",
    image: delineadorHyperPreciseImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "194",
    name: "Rimmel FIRE WORK de Maybelline",
    description: "Transformá tu mirada con la máscara Lash Sensational Firework a prueba de agua de Maybelline New York. Su innovador cepillo SuperSpark™, con un diseño en espiral inspirado en fuegos artificiales, despliega cada pestaña creando un look 360° de volumen explosivo y longitud impactante. La fórmula en gel con Pro-Vitamina B5 se desliza suavemente, sin grumos, dejando las pestañas acondicionadas. Disfruta de una mirada espectacular hasta por 24 horas, resistente al agua y a las manchas.",
    price: "$23.500",
    image: rimmelFireWorkImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "195",
    name: "Rimmel GREAT LASH de Maybelline",
    description: "Máscara de pestañas para un efecto natural. Otorga volumen y alargamiento sin grumos con pigmentos extra negros. Deslizá el cepillo grande desde la raíz hasta la punta de las pestañas. Aplicá más capas para crear más volumen.",
    price: "$17.000",
    image: rimmelGreatLashImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "196",
    name: "CITY BRONZER de Maybelline",
    description: "City Bronzer Bronzer & Contour Powder Makeup es el primer polvo bronceador y de contorno de Maybelline que ofrece un look de maquillaje bronceado y esculpido.",
    price: "$19.000",
    image: cityBronzerImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "197",
    name: "Sérum Revitalif Retinol Noche de L'oréal Paris",
    description: "El Sérum Noche Revitalift Retinol esta formulado con Retinol Puro (Vitamina A), capaz de activar el proceso de rejuvenecimiento. Podes leer más sobre el retinol haciendo click acá. Su uso es únicamente por la noche,  además es de suma importancia aplicar protector solar 50 la mañana siguiente dada su fotosensibilidad.",
    price: "$23.000",
    image: serumRevitalifNocheImage,
    category: "Cuidado" as const,
    isNew: true,
  },
  {
    id: "198",
    name: "Rimmel THE COLOSSAL de Maybelline",
    description: "¡Pestañas colosales en una sola pasada! Esta fórmula aumenta el volumen y contiene colágeno, mientras que el mega cepillo multiplica al instante el volumen por 9, y todo ello sin rastro de grumos.",
    price: "$17.000",
    image: [rimmelColossal1Image, rimmelColossal2Image],
    category: "Maquillaje" as const,
    isNew: true,
  },
  {
    id: "199",
    name: "VANILLA REBEL Victoria's Secret",
    description: "Descubrí el encanto de Vanilla Rebel, una edición limitada que te envuelve en un aura de misterio y sofisticación. Este body splash combina la calidez de la vainilla gourmand con un toque ahumado y sensual, creando un aroma irresistible y único. Desde la primera aplicación, sentirás la suave salida de seda de vainilla y sándalo cremoso, que da paso a un corazón de orquídea brumosa. Finalmente, su fondo de neblina de ámbar y almizcle sensual deja una estela cautivadora que perdura. Ideal para quienes buscan un perfume que combine atractivo y personalidad, Vanilla Rebel es el aliado perfecto para destacar en cada momento.",
    price: "$35.000",
    image: vanillaRebelImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "200",
    name: "DECADENT PLUM Victoria's Secret",
    description: "Decadent Plum huele a una combinación de fruta, flores y notas amaderadas. Sus notas principales son ciruela, flor de granado, dalia y sándalo, que crean un aroma dulce, floral y cálido.",
    price: "$35.000",
    image: decadentPlumImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "201",
    name: "PISTACHIO CREME Victoria's Secret",
    description: "Victoria's Secret Pistachio Crème es una fragancia deliciosa y envolvente que ofrece una mezcla de notas cremosas y dulces, perfectas para quienes disfrutan de los aromas suaves pero indulgentes. Con una base rica en pistacho, combinada con toques de crema y vainilla, este body splash crea una experiencia sensorial cálida y reconfortante, ideal para quienes buscan una fragancia lujosa y delicada que los envuelva durante todo el día.",
    price: "$35.000",
    image: pistachioCremeImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "202",
    name: "VANILLA CASHMERE Victoria's Secret",
    description: "Descubrí la suavidad y la riqueza de la bruma corporal Vanilla Cashmere. Esta dulce fragancia envuelve tus sentidos en una combinación de notas de lujosa vainilla, pétalos de almohada y merengue batido. Su aroma es ideal para quienes buscan un toque dulce y envolvente que perdura a lo largo del día.",
    price: "$35.000",
    image: vanillaCashmereImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "203",
    name: "SUGARED PETALS Victoria's Secret",
    description: "Delicias dulces llenan el menú mientras aromas de pistacho, caramelo y vainilla inundan la habitación y cautivan tus sentidos. Combínalo con la loción aromática a juego.",
    price: "$35.000",
    image: sugaredPetalsImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "204",
    name: "VANILLA LACE Victoria's Secret",
    description: "Vanilla Lace es una fragancia corporal cálida, dulce y reconfortante. Se centra en una vainilla cremosa con matices florales suaves y un fondo ligeramente amaderado. Es ideal para quienes aman los aromas intensamente dulces y envolventes, especialmente en épocas frescas.",
    price: "$35.000",
    image: vanillaLaceImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "205",
    name: "AMBER APERITIF Victoria's Secret",
    description: "Dulce, cremoso y elegante. Tiene ese toque a caramelo con un fondo cálido de ámbar, y virutas de chocolate.",
    price: "$35.000",
    image: amberAperitifImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "206",
    name: "TWILIGHT AMBER BERRY Victoria's Secret",
    description: "Twilight Amber Berry de Victoria's Secret es una fragancia sofisticada que combina lo frutal y lo cálido en una mezcla irresistible. Su aroma abre con bayas jugosas que aportan frescura y dulzura, envueltas en un fondo de ámbar cálido y envolvente que le da un toque elegante y sensual. Su fórmula ligera refresca la piel y deja un delicado velo perfumado, ideal para usar de día o de noche. Perfecto para quienes buscan un aroma femenino, intenso y cautivador.",
    price: "$35.000",
    image: twilightAmberBerryImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "207",
    name: "DREAMY APPLE ORCHARD Victoria's Secret",
    description: "Crujiente y delicioso. Un aire fresco que despierta. Huele a recolección de manzanas, flor de manzano, rosa silvestre, fresca brisa otoñal...",
    price: "$35.000",
    image: dreamyAppleOrchardImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "208",
    name: "CHERRY DESIRE Victoria's Secret",
    description: "Cherry Desire, la mezcla perfecta de cereza, licor y un toque amaderado que no pasa desapercibido. ¿te atreves a probarlo?",
    price: "$35.000",
    image: cherryDesireImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "209",
    name: "PURE SEDUCTION Victoria's Secret",
    description: "Es la combinación perfecta entre cítrico y dulce. Ninguno de los aromas se sobrepone al otro. ciruela roja y fresas. Frutal, dulce.",
    price: "$35.000",
    image: pureSeductionVSImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "210",
    name: "BARE VANILLA Victoria's Secret",
    description: "Una vainilla elegante, seductora y sobretodo reconfortante, se siente como un abrazo cálido y dulce. Acompañado de una crema perfumada dura horas en la piel y es perfecta para hacer layering y darle un toque dulce a cualquier perfume.",
    price: "$35.000",
    image: bareVanillaVSImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
  },
  {
    id: "211",
    name: "VELVET PETALS Victoria's Secret",
    description: "Las notas acarameladas de Pera Rubí, Jazmín Opulento y Ámbar Radiante añaden un toque de energía deslumbrante. Femenino y delicado, floral y chocolatoso.",
    price: "$35.000",
    image: velvetPetalsVSImage,
    category: "Fragancias" as const,
    isNew: true,
    variants: ["Body Splash", "Body Lotion"],
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
                    <TabsTrigger value="maquillaje" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Maquillaje</TabsTrigger>
                    <TabsTrigger value="cuidado" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Cuidado</TabsTrigger>
                    <TabsTrigger value="fragancias" className="whitespace-nowrap font-normal data-[state=active]:font-medium">Fragancias</TabsTrigger>
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
                      <p className="text-gray-500">No se encontraron productos de cuidado que coincidan con tu búsqueda.</p>
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
