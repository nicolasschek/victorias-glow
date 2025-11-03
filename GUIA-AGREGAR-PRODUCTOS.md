# 📦 GUÍA: Cómo Agregar Productos

## ✅ SÍ, PODÉS AGREGAR PRODUCTOS CUANDO QUIERAS

Incluso con el sitio en línea y el dominio .com.ar funcionando.

---

## 🔄 FLUJO DE ACTUALIZACIÓN:

```
1. Editar App.tsx → Agregar nuevo producto
2. Agregar imagen → /public/images/nuevo-producto.jpg
3. Git commit + push → Subir cambios a GitHub
4. Deploy automático → Vercel detecta y deploya (30-60 seg)
5. ¡Listo! → Producto visible en tu sitio
```

**⏱️ Tiempo total: 2-3 minutos**

---

## 📝 PASO A PASO: Agregar un producto nuevo

### **1️⃣ Agregar la imagen al código**

Abrí `/App.tsx` y busca la sección de imágenes (líneas 14-56):

```typescript
// Product images - Local images from /public/images/
const teddyTintImage = "/images/teddy-tint.jpg";
const bodyScrubImage = "/images/body-scrub.jpg";
// ... más imágenes

// 👇 AGREGA TU NUEVA IMAGEN AQUÍ:
const nuevoProductoImage = "/images/nuevo-producto.jpg";
```

---

### **2️⃣ Agregar el producto al catálogo**

Busca el array `const products = [` (línea 59) y agrega tu producto:

```typescript
const products = [
  {
    id: "3",
    name: "Teddy Tint Maybelline",
    description: "Labial líquido con efecto matte...",
    price: "$22.000",
    image: teddyTintImage,
    category: "Maquillaje" as const,
    isNew: true,
  },
  // ... más productos

  // 👇 AGREGA TU NUEVO PRODUCTO AQUÍ:
  {
    id: "999",  // ⚠️ Número único!
    name: "Nombre de tu Producto",
    description: "Descripción completa del producto. Características, beneficios, etc.",
    price: "$15.000",  // Con punto de mil
    image: nuevoProductoImage,  // La variable que creaste arriba
    category: "Maquillaje" as const,  // O "Cuidado"
    isNew: true,  // Badge de "NUEVO"
  },
];
```

---

## 🎯 CAMPOS DEL PRODUCTO:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `id` | Identificador único (string) | `"999"` |
| `name` | Nombre del producto | `"Body Splash VS Cherry"` |
| `description` | Descripción completa | `"Fragancia corporal de cereza..."` |
| `price` | Precio en pesos (string) | `"$35.000"` |
| `image` | Ruta de imagen o array | `imagen` o `[img1, img2]` |
| `category` | Categoría | `"Maquillaje"` o `"Cuidado"` |
| `isNew` | Badge "NUEVO" (opcional) | `true` o `false` |

---

## 🖼️ PRODUCTOS CON MÚLTIPLES IMÁGENES:

Si tu producto tiene varias fotos:

```typescript
// 1. Define las imágenes
const miProductoImg1 = "/images/mi-producto-1.jpg";
const miProductoImg2 = "/images/mi-producto-2.jpg";
const miProductoImg3 = "/images/mi-producto-3.jpg";

// 2. Usa un array en el producto
{
  id: "100",
  name: "Producto con Galería",
  description: "Tiene 3 fotos",
  price: "$20.000",
  image: [miProductoImg1, miProductoImg2, miProductoImg3],  // 👈 Array!
  category: "Cuidado" as const,
  isNew: false,
}
```

---

## 📁 AGREGAR LA IMAGEN FÍSICA:

1. **Prepara la imagen:**
   - Formato: JPG o PNG
   - Tamaño: Máximo 1200px de ancho
   - Peso: Menos de 500KB (optimiza en https://tinypng.com)

2. **Nombre del archivo:**
   - Todo en minúsculas
   - Con guiones (no espacios)
   - Ejemplo: `body-splash-cherry.jpg`

3. **Guárdala en:**
   ```
   public/images/body-splash-cherry.jpg
   ```

---

## 🚀 SUBIR LOS CAMBIOS:

```bash
# 1. Navega a tu proyecto
cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"

# 2. Agrega todos los cambios
git add .

# 3. Commit con mensaje descriptivo
git commit -m "Add new product: Body Splash Cherry"

# 4. Push a GitHub
git push origin main
```

**Vercel detecta automáticamente el push y hace deploy en 30-60 segundos** ✅

---

## ⚡ EJEMPLO COMPLETO:

### Quiero agregar: "Primer Facial Maybelline"

**1. Agregar imagen al código (`App.tsx`):**
```typescript
const primerFacialImage = "/images/primer-facial-maybelline.jpg";
```

**2. Agregar producto:**
```typescript
{
  id: "201",
  name: "Primer Facial Maybelline Baby Skin",
  description: "Pre-base facial que minimiza poros y líneas de expresión. Acabado suave y sedoso. Ideal para antes del maquillaje. 22ml.",
  price: "$18.500",
  image: primerFacialImage,
  category: "Maquillaje" as const,
  isNew: true,
},
```

**3. Guardar imagen:**
- Archivo: `primer-facial-maybelline.jpg`
- Ubicación: `public/images/primer-facial-maybelline.jpg`

**4. Git:**
```bash
git add .
git commit -m "Add Primer Facial Maybelline"
git push origin main
```

**5. ¡Listo!** En 1 minuto está en línea 🎉

---

## 📊 CATEGORÍAS DISPONIBLES:

Solo hay 2 categorías (definidas en tu código):

- ✅ `"Maquillaje"` - Para labiales, gloss, primers, etc.
- ✅ `"Cuidado"` - Para cremas, mascarillas, body splash, etc.

⚠️ **Importante:** Escribí exactamente `"Maquillaje"` o `"Cuidado"` (con mayúscula inicial)

---

## 🔢 IDs DE PRODUCTOS:

**⚠️ IMPORTANTE:** Cada producto necesita un ID único.

### IDs ya usados:
- `"3"` - Teddy Tint
- `"4"` - Kit Karseell
- `"5"` - L'Oreal Nutrición
- `"6"` - Purple Hair Mask
- `"7"` - Protector Térmico
- ... etc.

### Para nuevos productos:
- Usa números altos: `"100"`, `"101"`, `"102"`, etc.
- O usa nombres: `"cherry-splash"`, `"primer-facial"`, etc.

---

## 💡 CONSEJOS PRO:

### ✅ **Buenas prácticas:**
- Usa descripciones claras y atractivas
- Incluye beneficios, no solo características
- Precios con punto de mil: `"$35.000"` no `"35000"`
- Optimiza imágenes antes de subirlas (TinyPNG)
- Usa nombres de archivo descriptivos

### 🎯 **Organización:**
- Agrega productos nuevos al PRINCIPIO del array para que aparezcan primero
- Marca como `isNew: true` solo productos realmente nuevos
- Actualiza `isNew: false` después de 1-2 semanas

### 📸 **Fotos:**
- Usa fotos con fondo blanco o neutro
- Buena iluminación
- Enfoque en el producto
- Varias fotos = más ventas

---

## 🗑️ ELIMINAR UN PRODUCTO:

Simplemente borra el objeto completo del array `products`:

```typescript
// ❌ ELIMINAR ESTO:
{
  id: "100",
  name: "Producto Viejo",
  description: "Ya no lo vendo",
  price: "$10.000",
  image: viejoImage,
  category: "Cuidado" as const,
},
// 👆 Borra desde { hasta },
```

Después: `git add . && git commit -m "Remove old product" && git push`

---

## 📝 EDITAR UN PRODUCTO:

Para cambiar precio, descripción o foto:

**Antes:**
```typescript
{
  id: "100",
  name: "Producto X",
  price: "$15.000",  // ← Cambiar esto
  description: "Descripción vieja",
}
```

**Después:**
```typescript
{
  id: "100",
  name: "Producto X",
  price: "$18.000",  // ← Nuevo precio
  description: "Descripción actualizada con más info",
}
```

Después: `git push` y listo.

---

## ⏱️ ¿CUÁNTO TARDA EN APARECER?

| Acción | Tiempo |
|--------|--------|
| Git push | 5 segundos |
| Vercel build | 30-60 segundos |
| CDN update | 10-20 segundos |
| **TOTAL** | **1-2 minutos** ⚡ |

---

## 🎓 RESUMEN:

```typescript
// 1. Agregar imagen
const miProductoImg = "/images/mi-producto.jpg";

// 2. Agregar producto
{
  id: "único",
  name: "Nombre",
  description: "Descripción completa",
  price: "$XX.XXX",
  image: miProductoImg,
  category: "Maquillaje" as const,
  isNew: true,
}

// 3. Subir imagen física a: public/images/mi-producto.jpg

// 4. Git
git add . && git commit -m "Add new product" && git push

// 5. ✅ Esperar 1-2 minutos
```

---

## ❓ ¿NECESITÁS AYUDA?

Si querés que te ayude a agregar un producto específico, pasame:
1. 📝 Nombre del producto
2. 💰 Precio
3. 📄 Descripción
4. 📂 Categoría (Maquillaje o Cuidado)
5. 🖼️ ¿Tenés la foto lista?

**¡Y lo agregamos juntos!** 🚀
