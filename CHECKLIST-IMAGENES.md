# ✅ CHECKLIST - Verificación de nombres de imágenes

## 📋 IMPORTANTE: Los nombres deben ser EXACTAMENTE así

**⚠️ ATENCIÓN:**
- Todos en **minúsculas**
- Con **guiones** (no espacios)
- Extensión **.jpg** o **.png**

---

## 🔍 VERIFICACIÓN RÁPIDA:

Abrí la carpeta `public/images/` y verifica que tengas estos 17 archivos:

```
✅ teddy-tint.jpg
✅ body-scrub.jpg
✅ kit-karseell-1.jpg
✅ kit-karseell-2.jpg
✅ loreal-nutricion.jpg
✅ purple-hair-mask.jpg
✅ protector-termico.jpg
✅ karseell-mascarilla-1.jpg
✅ karseell-mascarilla-2.jpg
✅ karseell-aceite.jpg
✅ kit-vs-1.jpg
✅ kit-vs-2.jpg
✅ kit-vs-3.jpg
✅ kit-vs-4.jpg
✅ kit-vs-5.jpg
✅ body-lotion-vs.jpg
✅ body-splash-vs.jpg
```

---

## ❌ ERRORES COMUNES:

### ✖️ MAL:
- `Teddy-Tint.jpg` (mayúscula)
- `teddy_tint.jpg` (guión bajo)
- `teddy tint.jpg` (espacio)
- `TeddyTint.jpg` (sin guión)
- `teddy-tint.JPG` (extensión en mayúscula)

### ✅ BIEN:
- `teddy-tint.jpg` ← Así debe ser

---

## 🖼️ FORMATO DE IMÁGENES:

### ✅ Formatos aceptados:
- `.jpg`
- `.jpeg`
- `.png`

### ⚠️ Recomendaciones:
- **Tamaño:** Máximo 1200px de ancho
- **Peso:** Menos de 500KB por imagen
- **Calidad:** 80-90% (balance entre calidad y peso)

### 🔧 Herramientas para optimizar:
- **TinyPNG:** https://tinypng.com
- **Squoosh:** https://squoosh.app
- **ImageOptim:** https://imageoptim.com (Mac)

---

## 📂 ESTRUCTURA CORRECTA:

```
Victoria´s Glow/
├── public/
│   ├── images/
│   │   ├── teddy-tint.jpg          ✅
│   │   ├── body-scrub.jpg          ✅
│   │   ├── kit-karseell-1.jpg      ✅
│   │   ├── kit-karseell-2.jpg      ✅
│   │   ├── loreal-nutricion.jpg    ✅
│   │   ├── purple-hair-mask.jpg    ✅
│   │   ├── protector-termico.jpg   ✅
│   │   ├── karseell-mascarilla-1.jpg ✅
│   │   ├── karseell-mascarilla-2.jpg ✅
│   │   ├── karseell-aceite.jpg     ✅
│   │   ├── kit-vs-1.jpg            ✅
│   │   ├── kit-vs-2.jpg            ✅
│   │   ├── kit-vs-3.jpg            ✅
│   │   ├── kit-vs-4.jpg            ✅
│   │   ├── kit-vs-5.jpg            ✅
│   │   ├── body-lotion-vs.jpg      ✅
│   │   └── body-splash-vs.jpg      ✅
│   ├── logo.svg
│   └── manifest.json
├── App.tsx
└── ... (otros archivos)
```

---

## 🚀 COMANDO RÁPIDO PARA VERIFICAR:

### Windows (CMD):
```cmd
cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"
dir /b public\images
```

### Windows (PowerShell):
```powershell
Get-ChildItem -Path "public\images" -Name
```

Deberías ver exactamente 17 archivos `.jpg` listados.

---

## ✅ TODO LISTO?

Si tenés los 17 archivos con los nombres correctos:

1. ✅ Descargá el código actualizado de Figma Make
2. ✅ Copiá las imágenes a `/public/images/`
3. ✅ Hacé commit y push a GitHub
4. ✅ Vercel hará deploy automáticamente
5. ✅ Verificá tu sitio en 1-2 minutos

**¡Éxito! 🎉**
