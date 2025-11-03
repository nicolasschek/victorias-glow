# ⚡ COMANDOS GIT RÁPIDOS

## 🚀 Para cuando agregues/edites productos

---

## 📦 WORKFLOW COMPLETO (COPIAR Y PEGAR):

```bash
# 1. Navega a tu proyecto
cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"

# 2. Verifica cambios
git status

# 3. Agrega todos los cambios
git add .

# 4. Commit con mensaje
git commit -m "Add new product: [Nombre del producto]"

# 5. Push a GitHub
git push origin main

# ✅ Espera 1-2 minutos y verifica tu sitio
```

---

## ⚡ COMANDOS INDIVIDUALES:

### Ver qué archivos cambiaron:
```bash
git status
```

### Ver exactamente qué cambió:
```bash
git diff
```

### Agregar SOLO un archivo:
```bash
git add App.tsx
```

### Agregar TODAS las imágenes nuevas:
```bash
git add public/images/
```

### Agregar TODO:
```bash
git add .
```

### Commit rápido:
```bash
git commit -m "Update products"
```

### Push:
```bash
git push origin main
```

---

## 📝 MENSAJES DE COMMIT RECOMENDADOS:

### Para nuevos productos:
```bash
git commit -m "Add new product: Body Cream Victoria's Secret"
```

### Para actualizar precio:
```bash
git commit -m "Update price: Teddy Tint $22k → $24k"
```

### Para agregar imágenes:
```bash
git commit -m "Add product images: Kit VS and Body Lotion"
```

### Para eliminar producto:
```bash
git commit -m "Remove product: Protector Térmico (discontinued)"
```

### Para múltiples cambios:
```bash
git commit -m "Update catalog: Add 3 products, update 2 prices"
```

---

## 🔄 COMANDO TODO-EN-UNO:

### Agregar producto (1 línea):
```bash
git add . && git commit -m "Add new product: [Nombre]" && git push origin main
```

### Actualizar precio (1 línea):
```bash
git add App.tsx && git commit -m "Update price: [Producto]" && git push origin main
```

### Actualizar imágenes (1 línea):
```bash
git add public/images/ && git commit -m "Update product images" && git push origin main
```

---

## 🛠️ COMANDOS ÚTILES:

### Ver historial de commits:
```bash
git log --oneline
```

### Ver últimos 5 commits:
```bash
git log --oneline -5
```

### Ver quién cambió qué:
```bash
git blame App.tsx
```

### Ver estado limpio:
```bash
git status --short
```

---

## 🚨 SOLUCIÓN DE PROBLEMAS:

### Deshacerme de cambios (ANTES de commit):
```bash
git checkout App.tsx
```

### Deshacer TODOS los cambios (ANTES de commit):
```bash
git checkout .
```
⚠️ **CUIDADO:** Esto elimina TODO lo que no commiteaste

### Deshacer último commit (DESPUÉS de commit):
```bash
git reset HEAD~1
```
Los cambios quedan pero sin commit.

### Ver diferencias de un archivo específico:
```bash
git diff App.tsx
```

---

## 🔄 SINCRONIZAR CON GITHUB:

### Traer cambios de GitHub (si editaste online):
```bash
git pull origin main
```

### Forzar push (solo si estás seguro):
```bash
git push origin main --force
```
⚠️ **CUIDADO:** Úsalo solo si sabes lo que haces

---

## 📋 CHECKLIST ANTES DE PUSH:

Antes de `git push`, verifica:

- [ ] Probé los cambios localmente
- [ ] No hay errores en el código
- [ ] Las imágenes están en `/public/images/`
- [ ] Los nombres de archivo son correctos
- [ ] El mensaje de commit es descriptivo
- [ ] No hay archivos temporales incluidos

**Comando para verificar:**
```bash
git status
git diff
```

---

## 🎯 FLUJOS ESPECÍFICOS:

### FLUJO 1: Agregar producto nuevo
```bash
# Paso 1: Agrega imagen a /public/images/nuevo-producto.jpg
# Paso 2: Edita App.tsx (agrega producto)
# Paso 3: Guarda todo
# Paso 4: Terminal:

cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"
git add .
git commit -m "Add new product: Nuevo Producto"
git push origin main
```

---

### FLUJO 2: Actualizar solo precios
```bash
# Paso 1: Edita App.tsx (cambia precios)
# Paso 2: Guarda
# Paso 3: Terminal:

git add App.tsx
git commit -m "Update prices: Teddy Tint and Kit VS"
git push origin main
```

---

### FLUJO 3: Agregar solo imágenes nuevas
```bash
# Paso 1: Agrega imágenes a /public/images/
# Paso 2: Terminal:

git add public/images/
git commit -m "Add new product images"
git push origin main
```

---

### FLUJO 4: Eliminar producto
```bash
# Paso 1: Edita App.tsx (borra producto)
# Paso 2: Guarda
# Paso 3: Terminal:

git add App.tsx
git commit -m "Remove product: [nombre]"
git push origin main
```

---

## 💡 TIPS PRO:

### ✅ Alias útiles (opcional):
Agrega esto a tu `~/.gitconfig`:

```ini
[alias]
    a = add .
    c = commit -m
    p = push origin main
    s = status
    d = diff
```

Después podés usar:
```bash
git a         # = git add .
git c "msg"   # = git commit -m "msg"
git p         # = git push origin main
git s         # = git status
```

---

### 📝 Convenciones de mensajes:

**Formato recomendado:**
```
[Tipo]: [Descripción breve]

Tipos:
- Add: Agregar algo nuevo
- Update: Modificar algo existente
- Remove: Eliminar algo
- Fix: Corregir un error
```

**Ejemplos:**
```bash
git commit -m "Add: New product Body Splash Cherry"
git commit -m "Update: Prices for Karseell products"
git commit -m "Remove: Discontinued Protector Térmico"
git commit -m "Fix: Image path for Teddy Tint"
```

---

## 🔍 VER ESTADO DE DEPLOY EN VERCEL:

Después de `git push`:

1. **Opción 1:** Ve a https://vercel.com/dashboard
2. **Opción 2:** Espera 1 minuto y abrí tu sitio directamente

**Vercel hace deploy automático en ~30-60 segundos** ⚡

---

## 📱 DESDE VISUAL STUDIO CODE:

Si usás VS Code, también podés:

1. **Ver cambios:** Panel "Source Control" (Ctrl+Shift+G)
2. **Commit:** Escribí mensaje y click en ✓
3. **Push:** Click en "..." → "Push"

**¡Más visual y fácil!** 🎨

---

## ⚠️ ERRORES COMUNES:

### Error: "fatal: not a git repository"
**Solución:**
```bash
# Verifica que estés en la carpeta correcta
cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"
pwd  # Muestra la ruta actual
```

---

### Error: "nothing to commit"
**Causa:** No hiciste cambios o ya hiciste commit.

**Solución:**
```bash
git status  # Verifica qué está pasando
```

---

### Error: "rejected - non-fast-forward"
**Causa:** Hay cambios en GitHub que no tenés local.

**Solución:**
```bash
git pull origin main
git push origin main
```

---

### Error: "Please commit your changes or stash them"
**Causa:** Tenés cambios sin commitear y estás intentando pull.

**Solución:**
```bash
# Opción 1: Commit primero
git add .
git commit -m "WIP: Work in progress"
git pull origin main

# Opción 2: Guardar temporalmente
git stash
git pull origin main
git stash pop
```

---

## 🎓 RESUMEN ULTRA RÁPIDO:

### Para agregar/editar productos:
```bash
cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"
git add .
git commit -m "Descripción del cambio"
git push origin main
```

**¡En 3 comandos estás en línea!** 🚀

---

## 📚 RECURSOS:

- **GitHub Desktop:** https://desktop.github.com (interfaz visual)
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf
- **Vercel Dashboard:** https://vercel.com/dashboard

---

## ✅ CHECKLIST FINAL:

Después de cada push:

- [ ] Push exitoso (sin errores)
- [ ] Build exitoso en Vercel (~1 min)
- [ ] Sitio actualizado correctamente
- [ ] Productos se ven bien
- [ ] Imágenes cargan
- [ ] Precios correctos
- [ ] WhatsApp funciona

**¡Todo listo! 🎉**
