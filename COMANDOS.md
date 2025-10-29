# 🎯 Comandos Rápidos - Victoria's Glow

## 🚀 Deploy Inicial

```powershell
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Probar localmente
npm run dev

# 3. Subir a GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# 4. Ir a vercel.com e importar el repositorio
```

---

## 🔄 Actualizaciones

```powershell
# 1. Hacer cambios en el código

# 2. Subir cambios
git add .
git commit -m "Update: descripción de cambios"
git push origin main

# Vercel detectará el push y hará deploy automáticamente
```

---

## 🛠️ Comandos Útiles

```powershell
# Ver el sitio en desarrollo
npm run dev

# Construir para producción (verificar que no haya errores)
npm run build

# Ver el build de producción localmente
npm run preview

# Limpiar cache (si hay problemas)
npm run clean
```

---

## 📂 Estructura de Archivos Importante

```
victorias-glow/
├── App.tsx              ← Página principal
├── components/          ← Componentes reutilizables
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   └── ...
├── styles/
│   └── globals.css      ← Estilos globales
├── public/              ← Archivos estáticos (logo, etc)
├── package.json         ← Dependencias
├── vite.config.ts       ← Configuración de Vite
└── vercel.json          ← Configuración de Vercel
```

---

## ✅ Checklist Pre-Deploy

- [ ] `npm install` ejecutado sin errores
- [ ] `npm run dev` funciona correctamente
- [ ] `npm run build` completa sin errores
- [ ] Todos los cambios guardados y commiteados
- [ ] Push a GitHub realizado
- [ ] Proyecto importado en Vercel

---

## 🔗 Enlaces Útiles

- **Repositorio GitHub**: https://github.com/nicolasschek/victorias-glow
- **Vercel Dashboard**: https://vercel.com/dashboard
- **NIC Argentina**: https://nic.ar

---

**¿Problemas?** Revisá `DEPLOYMENT.md` para guía detallada.
