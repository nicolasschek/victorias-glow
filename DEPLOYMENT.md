# 🚀 Guía de Deployment - Victoria's Glow

## ✅ PASO 1: Preparar el proyecto local

### 1.1 Verificar que todo funcione localmente

Abrí PowerShell en la carpeta del proyecto y ejecutá:

```powershell
npm install
npm run dev
```

Abrí `http://localhost:5173` en tu navegador y verificá que todo se vea bien.

---

## ✅ PASO 2: Subir a GitHub

### 2.1 Inicializar Git (si no lo hiciste)

```powershell
git init
git add .
git commit -m "Initial commit - Victoria's Glow landing page"
```

### 2.2 Conectar con tu repositorio de GitHub

```powershell
git remote add origin https://github.com/nicolasschek/victorias-glow.git
git branch -M main
git push -u origin main
```

### 2.3 Para actualizaciones futuras

```powershell
git add .
git commit -m "Update: descripción de los cambios"
git push origin main
```

---

## ✅ PASO 3: Deploy en Vercel

### 3.1 Crear cuenta en Vercel

1. Andá a [vercel.com](https://vercel.com)
2. Click en "Sign Up"
3. Elegí "Continue with GitHub"
4. Autorizá a Vercel

### 3.2 Importar tu proyecto

1. En el dashboard de Vercel, click en "Add New..." → "Project"
2. Buscá tu repositorio: `victorias-glow`
3. Click en "Import"

### 3.3 Configurar el proyecto

Vercel detectará automáticamente que es un proyecto Vite. Verificá que:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 3.4 Deploy

1. Click en "Deploy"
2. Esperá 2-3 minutos
3. ¡Listo! Tu sitio estará en línea con una URL tipo: `victorias-glow.vercel.app`

---

## ✅ PASO 4: Configurar tu dominio .com.ar

### 4.1 En Vercel

1. Ve a tu proyecto en Vercel
2. Click en "Settings" → "Domains"
3. En "Add Domain", escribí tu dominio: `victoriasglow.com.ar`
4. Click en "Add"

Vercel te mostrará algo como:

```
Type: A
Name: @
Value: 76.76.21.21
```

O:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 4.2 En NIC Argentina

1. Iniciá sesión en [nic.ar](https://nic.ar)
2. Ve a "Mis dominios" → tu dominio
3. Click en "Administrar DNS" o "Zona DNS"
4. Agregá los registros que te mostró Vercel:

**Opción A (recomendada):**
```
Tipo: A
Host: @
Valor: 76.76.21.21
TTL: 3600
```

**Opción B:**
```
Tipo: CNAME  
Host: www
Valor: cname.vercel-dns.com
TTL: 3600
```

5. Guardá los cambios
6. Esperá 24-48 horas para propagación DNS

### 4.3 Verificar

Después de algunas horas, probá acceder a:
- `https://victoriasglow.com.ar`
- `https://www.victoriasglow.com.ar`

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios en tu código:

```powershell
# 1. Guardá los cambios
git add .
git commit -m "Update: descripción del cambio"

# 2. Subí a GitHub
git push origin main

# 3. Vercel hará el deploy automáticamente (2-3 minutos)
```

---

## 🆘 Solución de Problemas

### Error: "Command failed with exit code 1"

**Solución**: Verificá que package.json tenga:
```json
"type": "module"
```

### Error: "Failed to compile"

**Solución**: Ejecutá localmente:
```powershell
npm run build
```

Si funciona local, el problema es de configuración en Vercel.

### El sitio no carga después del deploy

**Solución**: Verificá en Vercel → tu proyecto → "Deployments" que el último deployment esté "Ready".

### El dominio no funciona

**Solución**: 
1. Verificá que los registros DNS estén correctos en NIC Argentina
2. Esperá 24-48 horas para propagación
3. Usá [whatsmydns.net](https://www.whatsmydns.net/) para verificar la propagación

---

## 📞 Soporte

Si tenés problemas, podés:
- Revisar los logs en Vercel (proyecto → Deployments → click en el deployment → "View Logs")
- Contactar soporte de Vercel: [vercel.com/support](https://vercel.com/support)

---

**¡Éxitos con tu proyecto!** 💖
