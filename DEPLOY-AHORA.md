# 🚀 DEPLOY AHORA - Pasos Simples

## ✅ TODO ESTÁ LISTO

Tu proyecto está **100% configurado** y listo para deployment.

---

## 📋 PASO 1: Verificar que funcione localmente

Abrí PowerShell en la carpeta del proyecto:

```powershell
cd "C:\Users\nicol\Desktop\niCo!\Victoria´s Glow"
```

Instalá dependencias (solo la primera vez):

```powershell
npm install
```

Iniciá el servidor de desarrollo:

```powershell
npm run dev
```

Abrí tu navegador en: `http://localhost:5173`

**¿Todo se ve bien?** → Continuá al Paso 2  
**¿Hay errores?** → Avisame cuál es el error

---

## 📋 PASO 2: Subir a GitHub

```powershell
# Inicializar Git (si no lo hiciste)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Deploy Victoria's Glow - Ready for production"

# Conectar con GitHub (solo la primera vez)
git remote add origin https://github.com/nicolasschek/victorias-glow.git

# Cambiar a rama main
git branch -M main

# Subir a GitHub
git push -u origin main
```

Si te pide usuario/contraseña, usá tu **Personal Access Token** de GitHub.

---

## 📋 PASO 3: Deploy en Vercel

### 3.1 Crear cuenta
1. Andá a: https://vercel.com
2. Click en **"Sign Up"**
3. Elegí **"Continue with GitHub"**
4. Autorizá a Vercel para acceder a tus repositorios

### 3.2 Importar proyecto
1. En el dashboard de Vercel, click en **"Add New..."** → **"Project"**
2. Buscá: `victorias-glow`
3. Click en **"Import"**

### 3.3 Configurar (Vercel lo hace automático)
Vercel detectará que es Vite y configurará:
- Framework: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

**NO CAMBIES NADA**, solo click en **"Deploy"**

### 3.4 Esperar
- El build toma **2-3 minutos**
- Verás un progreso en pantalla
- Cuando veas **"🎉 Congratulations!"** → ¡LISTO!

Tu sitio estará en: `https://victorias-glow.vercel.app`

---

## 📋 PASO 4: Configurar tu dominio .com.ar

### 4.1 En Vercel
1. Ve a tu proyecto → **Settings** → **Domains**
2. Escribí tu dominio: `victoriasglow.com.ar` (o el que tengas)
3. Click en **"Add"**

Vercel te mostrará algo como:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21
```

### 4.2 En NIC Argentina
1. Andá a: https://nic.ar
2. Iniciá sesión
3. **Mis Dominios** → Tu dominio → **Administrar DNS**
4. Agregá el registro que te mostró Vercel:

```
Tipo: A
Host: @
Valor: 76.76.21.21
TTL: 3600
```

5. **Guardar cambios**
6. Esperá **24-48 horas** para propagación DNS

---

## 🎉 ¡LISTO!

Tu sitio estará disponible en:
- ✅ `https://victorias-glow.vercel.app` (inmediato)
- ⏳ `https://victoriasglow.com.ar` (24-48 horas después de configurar DNS)

---

## 🔄 Para Actualizaciones Futuras

Cada vez que hagas cambios:

```powershell
git add .
git commit -m "Actualización: descripción del cambio"
git push origin main
```

**Vercel detectará el push y hará deploy automáticamente en 2-3 minutos.**

---

## 🆘 ¿Problemas?

### Error al hacer `npm install`
```powershell
# Eliminar node_modules y package-lock.json
rm -r node_modules
rm package-lock.json

# Reinstalar
npm install
```

### Error al hacer `git push`
```powershell
# Si dice "remote already exists"
git remote remove origin
git remote add origin https://github.com/nicolasschek/victorias-glow.git
git push -u origin main
```

### Error en Vercel
- Revisá los logs: Proyecto → Deployments → Click en el último → "View Logs"
- Copiá el error y avisame

---

**¿Todo funcionó?** 🎊  
**¿Hubo algún error?** Avisame y lo solucionamos juntos.
