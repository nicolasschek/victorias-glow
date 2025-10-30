# 📸 GUÍA: Cómo agregar tus imágenes de productos

## ✅ **TIPOGRAFÍAS YA CONFIGURADAS**

Las fuentes **Playfair Display** (títulos) y **Poppins** (textos) ya están instaladas y funcionando.
Solo necesitás descargar el código actualizado y hacer push a GitHub.

---

## 📷 **CÓMO AGREGAR TUS IMÁGENES**

### **Opción 1: Subir imágenes a /public/images/** (RECOMENDADO)

#### Paso 1: Preparar tus imágenes
1. Renombrá tus fotos de productos con estos nombres exactos:
   - `teddy-tint.jpg`
   - `body-scrub.jpg`
   - `kit-karseell-1.jpg`
   - `kit-karseell-2.jpg`
   - `loreal-nutricion.jpg`
   - `purple-hair-mask.jpg`
   - `protector-termico.jpg`
   - `kit-vs-1.jpg`
   - `kit-vs-2.jpg`
   - `kit-vs-3.jpg`
   - `kit-vs-4.jpg`
   - `kit-vs-5.jpg`
   - `karseell-mascarilla-1.jpg`
   - `karseell-mascarilla-2.jpg`
   - `karseell-aceite.jpg`
   - `body-lotion-vs.jpg`
   - `body-splash-vs.jpg`

2. **Optimizá las imágenes** (opcional pero recomendado):
   - Tamaño: Máximo 1200px de ancho
   - Peso: Menos de 500KB cada una
   - Formato: JPG o PNG
   - Herramientas: https://tinypng.com o https://squoosh.app

#### Paso 2: Subir a GitHub
```bash
# En tu proyecto local:
cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"

# Crear carpeta images dentro de public
mkdir public\images

# Copiar tus fotos a public\images\
# (arrastra las imágenes a esa carpeta)

# Agregar al git
git add public/images/
git commit -m "Add product images"
git push origin main
```

#### Paso 3: Avisame
Una vez que subas las imágenes a GitHub, avisame y yo actualizo el código de App.tsx para que las use automáticamente.

---

### **Opción 2: Usar URLs de imágenes** (si ya las tenés hosteadas)

Si ya tenés las imágenes en:
- Instagram
- Google Drive (con link público)
- Imgur
- Otro hosting

Solo pasame las URLs y las configuro directamente.

---

## 🚀 **RESUMEN DE CAMBIOS REALIZADOS:**

✅ **Tipografías:**
- Playfair Display para títulos (h1, h2, h3, h4)
- Poppins para textos y botones
- Import desde Google Fonts agregado

✅ **Próximo paso:**
- Agregar tus imágenes de productos

---

## 📝 **Comandos para deployar los cambios:**

```bash
# 1. Descarga el código actualizado desde Figma Make
# 2. Reemplaza los archivos en tu proyecto local
# 3. Agrega las imágenes a /public/images/
# 4. Sube todo a GitHub:

git add .
git commit -m "Update fonts and prepare for product images"
git push origin main

# Vercel hará deploy automáticamente
```

---

## ❓ **¿Necesitás ayuda?**

Avisame si:
- Necesitás ayuda para optimizar las imágenes
- Querés que use URLs externas en lugar de archivos locales
- Tenés problemas para subir las imágenes a GitHub

¡Estamos casi listos! 🎉
