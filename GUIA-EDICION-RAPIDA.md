# ⚡ GUÍA RÁPIDA: Edición de Productos

## 🎯 CAMBIOS MÁS COMUNES:

---

## 💰 CAMBIAR PRECIO

**Ubicación:** `/App.tsx` → Array `products`

```typescript
{
  id: "3",
  name: "Teddy Tint Maybelline",
  price: "$22.000",  // 👈 Cambiar aquí
}
```

**Después del cambio:**
```bash
git add App.tsx
git commit -m "Update price: Teddy Tint"
git push
```

---

## 📝 CAMBIAR DESCRIPCIÓN

```typescript
{
  id: "3",
  name: "Teddy Tint Maybelline",
  description: "Nueva descripción más completa con beneficios",  // 👈 Aquí
}
```

---

## 🆕 AGREGAR/QUITAR BADGE "NUEVO"

```typescript
{
  id: "3",
  name: "Teddy Tint Maybelline",
  isNew: true,  // 👈 true = muestra NUEVO | false = oculta
}
```

---

## 🖼️ CAMBIAR IMAGEN

**1. Sube nueva imagen a `/public/images/`:**
```
public/images/teddy-tint-nuevo.jpg
```

**2. Actualiza la ruta en `App.tsx`:**
```typescript
// En la sección de imágenes (líneas 14-56):
const teddyTintImage = "/images/teddy-tint-nuevo.jpg";  // 👈 Nueva ruta
```

**3. Push:**
```bash
git add .
git commit -m "Update image: Teddy Tint"
git push
```

---

## 📦 CAMBIAR CATEGORÍA

```typescript
{
  id: "3",
  name: "Teddy Tint Maybelline",
  category: "Maquillaje" as const,  // 👈 Solo "Maquillaje" o "Cuidado"
}
```

---

## 🗑️ ELIMINAR PRODUCTO

**Ubicación:** `/App.tsx` → Array `products`

**Busca el producto y borra TODO el objeto:**

```typescript
const products = [
  {
    id: "3",
    name: "Teddy Tint Maybelline",
    // ... todo el producto
  },
  // 👇 BORRAR DESDE AQUÍ...
  {
    id: "100",
    name: "Producto a eliminar",
    description: "...",
    price: "$10.000",
    image: viejoImage,
    category: "Cuidado" as const,
  },
  // 👆 ...HASTA AQUÍ (incluye la coma)
  {
    id: "5",
    name: "Siguiente producto",
    // ...
  },
];
```

**Push:**
```bash
git add App.tsx
git commit -m "Remove product: [nombre]"
git push
```

---

## 🔢 CAMBIAR ORDEN DE PRODUCTOS

Los productos aparecen en el sitio **en el mismo orden** que en el array.

**Para que un producto aparezca primero:**
- Cortalo y pegalo al inicio del array `products`

**Ejemplo:**

**Antes:**
```typescript
const products = [
  { id: "3", name: "Producto A" },
  { id: "4", name: "Producto B" },
  { id: "5", name: "Producto C" },  // 👈 Quiero que este sea primero
];
```

**Después:**
```typescript
const products = [
  { id: "5", name: "Producto C" },  // 👈 Ahora aparece primero
  { id: "3", name: "Producto A" },
  { id: "4", name: "Producto B" },
];
```

---

## 🎨 PRODUCTO CON VARIANTES DE COLOR

Si tu producto tiene varios colores (como el Teddy Tint):

```typescript
{
  id: "3",
  name: "Teddy Tint Maybelline",
  description: "Labial líquido con efecto matte...",
  price: "$22.000",
  image: teddyTintImage,
  category: "Maquillaje" as const,
  variants: [
    { color: "Less White", image: lessWhiteImage },
    { color: "Less Pink", image: lessPinkImage },
    { color: "Less Black", image: lessBlackImage },
    { color: "Less Red", image: lessRedImage },
    { color: "Less Lilac", image: lessLilacImage },
  ],
},
```

**Para agregar un nuevo color:**
1. Sube imagen: `/public/images/teddy-tint-new-color.jpg`
2. Agrega variable: `const lessBlueImage = "/images/teddy-tint-new-color.jpg";`
3. Agrega variante: `{ color: "Less Blue", image: lessBlueImage },`

---

## 📸 AGREGAR MÁS FOTOS A UN PRODUCTO

**De 1 imagen a varias:**

**Antes:**
```typescript
{
  id: "100",
  image: productoImage,  // 👈 Solo 1 imagen
}
```

**Después:**
```typescript
// 1. Define todas las imágenes
const productoImg1 = "/images/producto-1.jpg";
const productoImg2 = "/images/producto-2.jpg";
const productoImg3 = "/images/producto-3.jpg";

// 2. Usa un array
{
  id: "100",
  image: [productoImg1, productoImg2, productoImg3],  // 👈 Array!
}
```

---

## ⚡ COMANDOS RÁPIDOS:

### Ver productos actuales:
```bash
code App.tsx
# Busca: const products = [
```

### Commit rápido:
```bash
git add App.tsx
git commit -m "Update products"
git push
```

### Ver cambios antes de commit:
```bash
git diff App.tsx
```

### Deshacer cambios (antes de commit):
```bash
git checkout App.tsx
```

---

## 🔄 WORKFLOW TÍPICO:

```
1. Abrir App.tsx
2. Hacer cambios (precio, descripción, etc.)
3. Guardar archivo
4. git add App.tsx
5. git commit -m "Update: [descripción]"
6. git push
7. Esperar 1-2 minutos
8. Verificar en tu sitio ✅
```

---

## 📋 CHECKLIST DE EDICIÓN:

Antes de hacer push, verifica:

- [ ] Precio con formato correcto: `"$XX.XXX"`
- [ ] Categoría correcta: `"Maquillaje"` o `"Cuidado"`
- [ ] ID único (no duplicado)
- [ ] Descripción clara y atractiva
- [ ] Imagen existe en `/public/images/`
- [ ] Nombre de imagen en minúsculas con guiones

---

## 🎯 EJEMPLOS REALES:

### Actualizar precio:
```bash
# 1. Editar App.tsx (cambiar price)
# 2. Guardar
git add App.tsx
git commit -m "Update price: Teddy Tint $22.000 → $24.000"
git push
```

### Agregar nuevo producto:
```bash
# 1. Agregar imagen a /public/images/
# 2. Editar App.tsx (agregar producto)
# 3. Guardar
git add .
git commit -m "Add new product: Body Cream Victoria's Secret"
git push
```

### Marcar como agotado:
```typescript
{
  id: "3",
  name: "Teddy Tint Maybelline (AGOTADO)",  // 👈 Agregar en nombre
  description: "Temporalmente sin stock. Consultá disponibilidad.",
  // ...
}
```

---

## 💡 TIPS:

### ✅ **Mejores prácticas:**
- Commit frecuente (cada cambio)
- Mensajes descriptivos: `"Update price"` > `"cambios"`
- Prueba en tu sitio después de cada push
- Backup antes de cambios grandes

### ⚠️ **Evitar:**
- Cambiar IDs de productos existentes
- Borrar imágenes que se usan
- Editar directamente en producción sin backup
- Commits con muchos cambios mezclados

---

## ❓ ¿DUDAS?

**"¿Puedo editar desde GitHub directamente?"**
✅ SÍ, pero es más fácil en local y luego push.

**"¿Cuántos productos puedo tener?"**
✅ Ilimitados (técnicamente). Recomendado: menos de 100 para mantener velocidad.

**"¿Puedo volver a una versión anterior?"**
✅ SÍ, con `git revert` o desde GitHub.

**"¿El sitio se cae mientras deploya?"**
✅ NO, Vercel hace deploy sin downtime.

---

## 🚀 ¡TODO LISTO!

Ahora podés:
- ✅ Agregar productos nuevos
- ✅ Editar precios y descripciones
- ✅ Cambiar imágenes
- ✅ Eliminar productos
- ✅ Reordenar el catálogo

**¡Tu sitio siempre actualizado!** 🎉
