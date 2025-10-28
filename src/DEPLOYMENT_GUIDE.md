# 📦 Guía Completa de Deployment en Vercel

## Victoria's Glow by: Agus - Paso a Paso

---

## 🎯 Objetivo

Publicar tu landing page en Internet de forma **GRATUITA** y **PROFESIONAL** usando Vercel.

**Tiempo estimado**: 15-30 minutos  
**Costo**: $0 USD (gratis para siempre con Vercel)  
**Dificultad**: ⭐⭐☆☆☆ (Fácil)

---

## 📋 Requisitos Previos

### ✅ Lo que necesitás:

1. **Cuenta de email** (Gmail, Outlook, etc.)
2. **Los archivos de tu proyecto** (este código)
3. **15-30 minutos de tiempo**
4. **Conexión a Internet**

### ❌ Lo que NO necesitás:

- ❌ Tarjeta de crédito
- ❌ Conocimientos de programación
- ❌ Servidor propio
- ❌ Hosting pago

---

## 🚀 MÉTODO 1: Deploy Desde Figma Make (MÁS FÁCIL)

### Paso 1: Preparar el Proyecto

Desde Figma Make, ya tenés todo listo. Solo asegurate que:

- [x] Todos los productos estén correctos
- [x] Las imágenes estén cargadas
- [x] El número de WhatsApp sea correcto (5491127329853)
- [x] El Instagram esté correcto (@victoriasglow.byagus)

### Paso 2: Exportar/Deploy

1. **En Figma Make:**
   - Click en el botón "Export" o "Deploy"
   - Selecciona **"Vercel"** como plataforma de deploy

2. **Crear cuenta en Vercel:**
   - Si no tenés cuenta, te pedirá crear una
   - Podés registrarte con:
     - 🔵 GitHub (recomendado)
     - 🔴 GitLab
     - ⚫ Email

3. **Autorizar conexión:**
   - Acepta que Figma Make se conecte con Vercel
   - Da los permisos necesarios

4. **Configurar proyecto:**
   - Nombre del proyecto: `victorias-glow-by-agus`
   - Framework: Automáticamente detectado (Vite)
   - Click en **"Deploy"**

5. **Esperar el deploy:**
   - Vercel construirá tu sitio (1-3 minutos)
   - Te mostrará el progreso en tiempo real
   - Cuando termine, verás: ✅ **Deployment Complete**

6. **Tu sitio está LIVE! 🎉**
   - URL temporal: `https://victorias-glow-by-agus.vercel.app`
   - Click en "Visit" para ver tu sitio

---

## 🚀 MÉTODO 2: Deploy Manual desde GitHub

### Paso 1: Crear Repositorio en GitHub

1. **Ir a GitHub:**
   - Ve a [https://github.com](https://github.com)
   - Crea una cuenta si no tenés

2. **Crear nuevo repositorio:**
   - Click en el botón verde "New"
   - Nombre: `victorias-glow-by-agus`
   - Visibilidad: **Public** (para deploy gratis)
   - ✅ Add README: NO (ya lo tenemos)
   - Click en "Create repository"

3. **Subir archivos:**
   
   **Opción A - Desde la web (más fácil):**
   - En tu repositorio nuevo, click "uploading an existing file"
   - Arrastra TODOS los archivos del proyecto
   - Commit message: "Initial commit"
   - Click "Commit changes"

   **Opción B - Desde terminal:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/victorias-glow-by-agus.git
   git push -u origin main
   ```

### Paso 2: Conectar Vercel con GitHub

1. **Ir a Vercel:**
   - Ve a [https://vercel.com/signup](https://vercel.com/signup)
   - Click en "Continue with GitHub"
   - Autoriza Vercel

2. **Importar proyecto:**
   - En el dashboard de Vercel, click "Add New..."
   - Selecciona "Project"
   - Click en "Import Git Repository"
   - Busca `victorias-glow-by-agus`
   - Click "Import"

3. **Configurar proyecto:**
   
   Vercel detectará automáticamente:
   ```
   Framework Preset: Vite
   Root Directory: ./
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

   **NO CAMBIES NADA**, solo click en "Deploy"

4. **Esperar el build:**
   - Vercel instalará dependencias (1-2 min)
   - Ejecutará el build (30-60 seg)
   - Deployará el sitio (10-20 seg)
   - Total: ~2-4 minutos

5. **¡Listo! 🎉**
   - Tu sitio: `https://victorias-glow-by-agus.vercel.app`

---

## 🌐 AGREGAR DOMINIO PERSONALIZADO

### Por qué necesitás un dominio propio:

❌ **URL gratuita de Vercel:**
```
https://victorias-glow-by-agus.vercel.app
```
- Difícil de recordar
- No se ve profesional
- No inspira confianza

✅ **Tu dominio personalizado:**
```
https://victoriasglow.com.ar
o
https://www.victoriasglow.com.ar
```
- Fácil de recordar
- Profesional
- Genera confianza
- Puedes tener email: contacto@victoriasglow.com.ar

### Paso 1: Registrar Dominio

#### Opción A: Dominio .com.ar (RECOMENDADO 🇦🇷)

**Costo**: ~$3.000-5.000 ARS por año

1. **Ir a NIC Argentina:**
   - Ve a [https://nic.ar](https://nic.ar)
   - Click en "Registrá tu .ar"

2. **Buscar disponibilidad:**
   - Buscá: `victoriasglow.com.ar`
   - Si está disponible, click "Registrar"

3. **Elegir registrante:**
   - Elegí un registrante autorizado (ej: DonWeb, HostingAr)
   - Seguí el proceso de registro
   - Pagá con tarjeta de crédito/débito o transferencia

4. **Completar datos:**
   - Datos personales
   - Email de contacto
   - Datos de facturación

5. **Confirmar:**
   - Recibirás email de confirmación
   - El dominio estará activo en 1-24 horas

#### Opción B: Dominio .com Internacional

**Costo**: ~USD 10-15 por año

1. **Ir a Namecheap:**
   - Ve a [https://www.namecheap.com](https://www.namecheap.com)
   - Crea una cuenta

2. **Buscar dominio:**
   - Buscá: `victoriasglow.com`
   - Click "Add to Cart"

3. **Checkout:**
   - Protección WHOIS gratis (acepta)
   - Auto-renovación (opcional)
   - Paga con tarjeta

4. **Confirmar:**
   - Email de confirmación
   - Dominio activo inmediatamente

### Paso 2: Configurar DNS en Vercel

1. **En Vercel:**
   - Ve a tu proyecto
   - Click en "Settings" (arriba)
   - Click en "Domains" (menú izquierdo)

2. **Agregar dominio:**
   - Click "Add"
   - Ingresa tu dominio: `victoriasglow.com.ar`
   - Click "Add"

3. **Copiar configuración DNS:**

   Vercel te mostrará algo como:

   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21

   Tipo: CNAME  
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

   **Copia estos valores** (los vas a necesitar)

### Paso 3: Configurar DNS en tu Proveedor

#### Si registraste en NIC.ar (a través de DonWeb/HostingAr):

1. **Login a tu panel de hosting:**
   - Ve al panel de tu registrante
   - Busca "Gestión de DNS" o "DNS Management"

2. **Agregar registros:**
   
   **Registro A:**
   ```
   Tipo: A
   Nombre: @ (o dejar vacío)
   Valor: 76.76.21.21
   TTL: 3600 (o Auto)
   ```

   **Registro CNAME:**
   ```
   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com.
   TTL: 3600 (o Auto)
   ```

3. **Guardar cambios**

#### Si registraste en Namecheap:

1. **Login a Namecheap:**
   - Ve a Dashboard
   - Click en "Manage" junto a tu dominio

2. **Ir a Advanced DNS:**
   - Tab "Advanced DNS"
   - Click "Add New Record"

3. **Agregar registros:**
   
   **Registro A:**
   ```
   Type: A Record
   Host: @
   Value: 76.76.21.21
   TTL: Automatic
   ```

   **Registro CNAME:**
   ```
   Type: CNAME Record
   Host: www
   Value: cname.vercel-dns.com.
   TTL: Automatic
   ```

4. **Guardar (Save All Changes)**

### Paso 4: Verificar y Esperar

1. **Volver a Vercel:**
   - En tu proyecto → Settings → Domains
   - Deberías ver tu dominio
   - Estado: "Pending" o "Configuring"

2. **Esperar propagación DNS:**
   - Puede tomar de **5 minutos a 48 horas**
   - Típicamente: 30 minutos - 4 horas
   - Vercel verificará automáticamente

3. **Certificado SSL (HTTPS):**
   - Vercel generará automáticamente
   - Tu sitio tendrá el candadito 🔒
   - GRATIS para siempre

4. **¡Listo! 🎉**
   - Tu sitio: `https://victoriasglow.com.ar`
   - Con HTTPS automático
   - Completamente profesional

---

## 📧 CONFIGURAR EMAIL PROFESIONAL

### Opción 1: Zoho Mail (GRATIS)

**Incluye:**
- ✅ Hasta 5 cuentas de email gratis
- ✅ 5 GB por cuenta
- ✅ Webmail y apps móviles
- ✅ Sin publicidad

1. **Crear cuenta:**
   - Ve a [https://www.zoho.com/mail/](https://www.zoho.com/mail/)
   - Click "Sign Up"
   - Plan: "Mail Lite" (Forever Free)

2. **Agregar dominio:**
   - Ingresa: `victoriasglow.com.ar`
   - Verifica que eres el dueño

3. **Crear cuenta de email:**
   - Usuario: `contacto`
   - Email final: `contacto@victoriasglow.com.ar`
   - Contraseña segura

4. **Configurar DNS (MX Records):**

   En tu proveedor de dominio (NIC.ar/Namecheap):

   ```
   Tipo: MX
   Nombre: @
   Valor: mx.zoho.com
   Prioridad: 10

   Tipo: MX
   Nombre: @
   Valor: mx2.zoho.com
   Prioridad: 20

   Tipo: MX
   Nombre: @
   Valor: mx3.zoho.com
   Prioridad: 50
   ```

5. **Verificar SPF y DKIM:**
   
   Zoho te dará estos registros TXT:

   ```
   Tipo: TXT
   Nombre: @
   Valor: v=spf1 include:zoho.com ~all
   ```

6. **Esperar verificación:**
   - 1-24 horas
   - Recibirás confirmación por email

7. **¡Listo!**
   - Accede a tu email: [https://mail.zoho.com](https://mail.zoho.com)
   - O descarga la app Zoho Mail

### Opción 2: Google Workspace (PAGO)

**Costo**: ~$6 USD/mes (~$7.500 ARS/mes)

**Incluye:**
- Gmail profesional
- 30 GB de almacenamiento
- Google Drive, Docs, Sheets
- Google Meet
- Soporte 24/7

1. **Ir a Google Workspace:**
   - [https://workspace.google.com](https://workspace.google.com)
   - Click "Get Started"

2. **Seguir asistente:**
   - Ingresa tu dominio
   - Crea cuenta de administrador
   - Agrega método de pago

3. **Verificar dominio:**
   - Google te dará un código TXT
   - Agrégalo a DNS de tu dominio

4. **Configurar MX records:**
   - Google te dará 5 registros MX
   - Agrégalos a tu DNS

5. **¡Listo!**
   - Email: `contacto@victoriasglow.com.ar`
   - Acceso: [https://mail.google.com](https://mail.google.com)

---

## 🔧 TROUBLESHOOTING

### Problema: El deploy falla

**Solución:**
1. Verifica que `package.json` existe
2. Chequea que no haya errores en la consola de Vercel
3. Asegúrate que todas las dependencias estén instaladas
4. Prueba hacer re-deploy: Settings → Deployments → ... → Redeploy

### Problema: El dominio no funciona

**Solución:**
1. Espera más tiempo (puede tardar hasta 48h)
2. Verifica que los DNS estén correctos en tu proveedor
3. Usa [https://dnschecker.org](https://dnschecker.org) para verificar propagación
4. Asegúrate de NO tener registros duplicados

### Problema: Imágenes no cargan

**Solución:**
1. Verifica que las imágenes estén en la carpeta correcta
2. Chequea que las importaciones sean correctas
3. Asegúrate que las imágenes no sean demasiado pesadas (< 2MB cada una)

### Problema: El carrito no funciona

**Solución:**
1. Abre la consola del navegador (F12)
2. Busca errores en rojo
3. Verifica que el CartContext esté bien implementado
4. Prueba limpiar el localStorage: `localStorage.clear()`

### Problema: WhatsApp no abre

**Solución:**
1. Verifica que el número sea correcto: `5491127329853`
2. Asegúrate que esté en formato internacional (sin +)
3. Prueba en un dispositivo móvil
4. Verifica que WhatsApp esté instalado

---

## 📊 POST-DEPLOY: Analytics y Métricas

### Google Analytics 4 (Gratis)

1. **Crear cuenta:**
   - [https://analytics.google.com](https://analytics.google.com)
   - "Start measuring"
   - Crea una propiedad

2. **Obtener Measurement ID:**
   - Formato: `G-XXXXXXXXXX`
   - Copia este ID

3. **Agregar a tu sitio:**
   
   Edita `/index.html`, agrega antes de `</head>`:

   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

4. **Re-deploy:**
   - Guarda cambios
   - Push a GitHub (si usaste ese método)
   - Vercel auto-deployará
   - O usa "Redeploy" en Vercel

5. **Verificar:**
   - Visita tu sitio
   - En 24-48h verás datos en Analytics

### Meta Pixel (para Instagram/Facebook Ads)

1. **Crear Pixel:**
   - [https://business.facebook.com](https://business.facebook.com)
   - Events Manager → Pixels
   - Create a Pixel

2. **Copiar Pixel ID**

3. **Agregar código:**

   En `/index.html` antes de `</head>`:

   ```html
   <!-- Meta Pixel Code -->
   <script>
   !function(f,b,e,v,n,t,s)
   {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
   n.callMethod.apply(n,arguments):n.queue.push(arguments)};
   if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
   n.queue=[];t=b.createElement(e);t.async=!0;
   t.src=v;s=b.getElementsByTagName(e)[0];
   s.parentNode.insertBefore(t,s)}(window, document,'script',
   'https://connect.facebook.net/en_US/fbevents.js');
   fbq('init', 'TU_PIXEL_ID');
   fbq('track', 'PageView');
   </script>
   ```

---

## ✅ CHECKLIST FINAL

### Pre-Deploy
- [ ] Todos los productos tienen imágenes
- [ ] Precios actualizados
- [ ] Número de WhatsApp correcto
- [ ] Instagram correcto
- [ ] Textos revisados sin errores

### Deploy
- [ ] Sitio deployed en Vercel
- [ ] URL funciona correctamente
- [ ] Todas las páginas cargan
- [ ] Imágenes se ven bien
- [ ] WhatsApp abre correctamente
- [ ] Instagram abre correctamente
- [ ] Carrito funciona
- [ ] Responsive en mobile

### Post-Deploy
- [ ] Dominio personalizado conectado
- [ ] HTTPS activo (candadito verde)
- [ ] Email profesional configurado
- [ ] Google Analytics instalado
- [ ] Meta Pixel instalado (opcional)
- [ ] Probado en diferentes dispositivos
- [ ] Compartido en Instagram
- [ ] Agregado a tarjetas de presentación

---

## 🎉 ¡FELICITACIONES!

Tu landing page está **LIVE** y lista para generar ventas.

**Próximos pasos:**
1. Compartí la URL en tus redes sociales
2. Actualiza tu bio de Instagram
3. Agrega el link a WhatsApp Business
4. Crea contenido mostrando tus productos
5. Recopila testimonios de clientes
6. Considera invertir en Instagram/Facebook Ads

---

## 📞 Soporte

¿Problemas con el deploy?

- **Documentación Vercel**: [https://vercel.com/docs](https://vercel.com/docs)
- **Soporte Vercel**: [https://vercel.com/support](https://vercel.com/support)
- **Comunidad**: [https://github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

---

**¡Mucha suerte con tu emprendimiento! 🚀💖**

*Última actualización: Octubre 2025*
