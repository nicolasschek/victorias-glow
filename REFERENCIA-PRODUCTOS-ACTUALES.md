# 📋 REFERENCIA: Productos Actuales & IDs Disponibles

## 📦 PRODUCTOS ACTUALES EN TU CATÁLOGO:

### Total: **11 productos**

---

## 🔢 IDs OCUPADOS:

| ID | Producto | Precio | Categoría | Estado |
|----|----------|--------|-----------|--------|
| `"3"` | Teddy Tint Maybelline | $22.000 | Maquillaje | ✅ Activo |
| `"4"` | Kit Karseell: Mascarilla + Aceite | $42.000 | Cuidado | ✅ Activo |
| `"5"` | Tratamiento Nutrición L'Oreal Paris | $19.000 | Cuidado | ✅ Activo |
| `"6"` | Exfoliating Body Scrub | $30.000 | Cuidado | ✅ Activo |
| `"13"` | Mascarilla Purple Hair Mask | $32.000 | Cuidado | ✅ Activo |
| `"14"` | Protector Térmico Karseell | Sin Stock | Cuidado | ⚠️ Agotado |
| `"15"` | Kit Victoria's Secret | $48.000 | Fragancias | ✅ Activo |
| `"18"` | Mascarilla Karseell | $30.000 | Cuidado Personal | ✅ Activo |
| `"19"` | Aceite Karseell | $22.000 | Cuidado Personal | ✅ Activo |
| `"20"` | Body Lotion VS | $35.000 | Cuidado Personal | ✅ Activo |
| `"21"` | Body Splash VS | $35.000 | Fragancias | ✅ Activo |

---

## ✅ IDs DISPONIBLES PARA NUEVOS PRODUCTOS:

**Recomendados (secuencia lógica):**
- `"7"`, `"8"`, `"9"`, `"10"`, `"11"`, `"12"` (siguiendo orden)
- `"16"`, `"17"` (completando secuencia)
- `"22"`, `"23"`, `"24"`, etc. (siguiendo después del último)

**O usa rangos altos:**
- `"100"`, `"101"`, `"102"`, etc. (para productos especiales)
- `"200"`, `"201"`, `"202"`, etc. (para promociones)

---

## 📂 CATEGORÍAS ACTUALES:

Tu sitio tiene **5 categorías** (definidas en el código):

| Categoría | Productos | Clave en código |
|-----------|-----------|-----------------|
| 🎨 **Maquillaje** | 1 | `"Maquillaje" as const` |
| 💧 **Cuidado** (Capilar) | 4 | `"Cuidado" as const` |
| 🌸 **Fragancias** | 2 | `"Fragancias" as const` |
| 💆 **Cuidado Personal** | 3 | `"Cuidado Personal" as const` |
| 👗 **Lencería** | 0 | *(no en uso aún)* |

---

## 🎯 PRÓXIMO ID RECOMENDADO:

### Para seguir la secuencia:
```typescript
{
  id: "22",  // 👈 Siguiente en orden
  name: "Tu Nuevo Producto",
  // ...
}
```

### Para productos especiales:
```typescript
{
  id: "100",  // 👈 Rango alto
  name: "Producto Premium",
  // ...
}
```

---

## 📊 PRODUCTOS POR CATEGORÍA:

### 🎨 Maquillaje (1):
- ID 3: Teddy Tint Maybelline

### 💧 Cuidado Capilar (4):
- ID 4: Kit Karseell
- ID 5: L'Oreal Nutrición
- ID 6: Body Scrub
- ID 13: Purple Hair Mask
- ID 14: Protector Térmico (Sin stock)

### 🌸 Fragancias (2):
- ID 15: Kit Victoria's Secret
- ID 21: Body Splash VS

### 💆 Cuidado Personal (3):
- ID 18: Mascarilla Karseell
- ID 19: Aceite Karseell
- ID 20: Body Lotion VS

### 👗 Lencería (0):
- *(Sin productos aún)*

---

## 🆕 PLANTILLA PARA NUEVO PRODUCTO:

### Producto simple (1 imagen):
```typescript
{
  id: "22",  // 👈 Cambia esto
  name: "Nombre del Producto",
  description: "Descripción completa del producto con beneficios y características.",
  price: "$XX.XXX",
  image: nombreProductoImage,  // Variable definida arriba
  category: "Cuidado Personal" as const,  // Una de las 5 categorías
  isNew: true,
},
```

### Producto con galería (múltiples imágenes):
```typescript
{
  id: "23",
  name: "Producto con Galería",
  description: "Descripción...",
  price: "$XX.XXX",
  image: [imagen1, imagen2, imagen3],  // 👈 Array!
  category: "Fragancias" as const,
  isNew: true,
},
```

### Producto agotado:
```typescript
{
  id: "24",
  name: "Producto Agotado",
  description: "Temporalmente sin stock.",
  price: "Sin Stock",  // 👈 Texto en lugar de precio
  image: imagenProducto,
  category: "Maquillaje" as const,
  isNew: false,
  outOfStock: true,  // 👈 Flag de agotado
},
```

---

## 🖼️ IMÁGENES DISPONIBLES (YA DEFINIDAS):

### Maquillaje:
- `teddyTintImage` → `/images/teddy-tint.jpg`
- `lessWhiteImage`, `lessPinkImage`, etc. (variantes Teddy Tint)

### Cuidado Capilar:
- `kitKarseellImage1`, `kitKarseellImage2`
- `lorealNutricionImage`
- `purpleHairMaskImage`
- `protectorTermicoImage`
- `karseellImage1`, `karseellImage2`
- `karseellOilImage1`

### Fragancias & Cuidado Personal:
- `kitVSImage1`, `kitVSImage2`, `kitVSImage3`, `kitVSImage4`, `kitVSImage5`
- `bodyLotionImage`, `bodyLotionImage1`
- `bodySplashImage`, `bodySplashImage1`
- `bodyScrubImage`

---

## 💡 SUGERENCIAS PARA ORGANIZACIÓN:

### ✅ **Buena práctica:**
```typescript
// Agrupar productos por marca o tipo
const products = [
  // MAYBELLINE
  { id: "3", name: "Teddy Tint Maybelline", ... },
  
  // KARSEELL
  { id: "4", name: "Kit Karseell", ... },
  { id: "18", name: "Mascarilla Karseell", ... },
  { id: "19", name: "Aceite Karseell", ... },
  
  // VICTORIA'S SECRET
  { id: "15", name: "Kit VS", ... },
  { id: "20", name: "Body Lotion VS", ... },
  { id: "21", name: "Body Splash VS", ... },
];
```

### 🔢 **Sistema de IDs recomendado:**
```typescript
// Opción 1: Por marca
1-99:   Maybelline
100-199: Karseell
200-299: Victoria's Secret
300-399: L'Oreal
etc.

// Opción 2: Por categoría
1-99:   Maquillaje
100-199: Cuidado Capilar
200-299: Fragancias
etc.
```

---

## ⚠️ IMPORTANTE:

### ❌ NO hacer:
- No reutilizar IDs de productos eliminados
- No usar IDs duplicados
- No cambiar IDs de productos existentes

### ✅ SÍ hacer:
- Usar IDs únicos siempre
- Mantener IDs como strings: `"22"` no `22`
- Documentar productos eliminados

---

## 📈 ESTADÍSTICAS ACTUALES:

- **Total productos:** 11
- **Productos activos:** 10
- **Productos agotados:** 1 (Protector Térmico)
- **Productos con badge NUEVO:** 11 (todos)
- **Rango de precios:** $19.000 - $48.000
- **Precio promedio:** ~$30.500
- **Productos con galería:** 6
- **Productos con 1 imagen:** 5

---

## 🚀 PRÓXIMOS PASOS SUGERIDOS:

### Productos que podrías agregar:

1. **Lencería Victoria's Secret**
   - ID sugerido: `"7"`, `"8"`, `"9"`
   - Categoría: `"Lencería" as const`
   - Actualmente sin productos en esta categoría

2. **Más Maybelline**
   - Rimmel, bases, primers
   - ID sugerido: `"10"`, `"11"`, `"12"`
   - Categoría: `"Maquillaje" as const`

3. **Promociones/Combos**
   - ID sugerido: `"100"`, `"101"`, etc.
   - Usa rango alto para destacarlos

---

## 📝 CHECKLIST PARA AGREGAR PRODUCTO:

- [ ] Elegir ID único (ver tabla arriba)
- [ ] Preparar imagen(es) optimizada(s)
- [ ] Subir imagen(es) a `/public/images/`
- [ ] Definir variable de imagen en `App.tsx`
- [ ] Agregar objeto producto al array `products`
- [ ] Verificar categoría correcta
- [ ] Establecer precio con formato `"$XX.XXX"`
- [ ] Decidir si lleva badge `isNew: true`
- [ ] Guardar archivo
- [ ] `git add . && git commit -m "..." && git push`
- [ ] Verificar en sitio (1-2 minutos)

---

## 🎓 RESUMEN RÁPIDO:

**Para agregar un producto:**
1. ✅ ID disponible: `"22"`, `"23"`, `"24"`... o `"100"+`
2. ✅ Categoría: `"Maquillaje"`, `"Cuidado"`, `"Fragancias"`, `"Cuidado Personal"`, o `"Lencería"`
3. ✅ Precio formato: `"$XX.XXX"`
4. ✅ Imagen: `/public/images/nombre-producto.jpg`

**¡Todo listo para crecer tu catálogo!** 🎉
