# 📝 EJEMPLO: Cómo quedaría el código con tus imágenes

## Así están ahora (URLs de Unsplash):

```typescript
const teddyTintImage = "https://images.unsplash.com/photo-12345...";
const bodyScrubImage = "https://images.unsplash.com/photo-67890...";
```

## Así quedarían con tus imágenes locales:

```typescript
const teddyTintImage = "/images/teddy-tint.jpg";
const bodyScrubImage = "/images/body-scrub.jpg";
const kitKarseellImage1 = "/images/kit-karseell-1.jpg";
const kitKarseellImage2 = "/images/kit-karseell-2.jpg";
const lorealNutricionImage = "/images/loreal-nutricion.jpg";
const purpleHairMaskImage = "/images/purple-hair-mask.jpg";
const protectorTermicoImage = "/images/protector-termico.jpg";
const kitVSImage1 = "/images/kit-vs-1.jpg";
const kitVSImage2 = "/images/kit-vs-2.jpg";
const kitVSImage3 = "/images/kit-vs-3.jpg";
const kitVSImage4 = "/images/kit-vs-4.jpg";
const kitVSImage5 = "/images/kit-vs-5.jpg";
const karseellImage1 = "/images/karseell-mascarilla-1.jpg";
const karseellImage2 = "/images/karseell-mascarilla-2.jpg";
const karseellOilImage1 = "/images/karseell-aceite.jpg";
const bodyLotionImage1 = "/images/body-lotion-vs.jpg";
const bodySplashImage1 = "/images/body-splash-vs.jpg";
```

## ¿Por qué `/images/` y no `/public/images/`?

En Vite, los archivos en `/public/` se sirven desde la raíz. Por eso:
- Tu archivo está en: `/public/images/teddy-tint.jpg`
- Pero se accede como: `/images/teddy-tint.jpg`

---

## 🎯 PROCESO COMPLETO:

1. **Subís tus imágenes** a `/public/images/` con los nombres exactos
2. **Me avisás** que ya están subidas
3. **Yo actualizo** el código de App.tsx para usar `/images/nombre-archivo.jpg`
4. **Hacés push** a GitHub
5. **Vercel deploya** automáticamente
6. **¡Listo!** Tus productos con tus fotos reales 🎉

---

## 📋 CHECKLIST:

- [ ] Descargué el código actualizado de Figma Make (con las fuentes nuevas)
- [ ] Creé la carpeta `/public/images/`
- [ ] Renombré mis fotos con los nombres correctos
- [ ] Subí las fotos a `/public/images/`
- [ ] Le avisé al asistente que ya están listas
- [ ] El asistente actualizó App.tsx
- [ ] Descargué el código final
- [ ] Hice push a GitHub
- [ ] Verifiqué que el deploy en Vercel fue exitoso
- [ ] Revisé que las imágenes se vean correctamente en el sitio

---

**¿Querés que te ayude con algún paso en particular?**
