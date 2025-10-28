# 🌸 Victoria's Glow by: Agus

Landing page profesional para reventa de productos Victoria's Secret en Argentina.

![Version](https://img.shields.io/badge/version-1.0.0-pink.svg)
![React](https://img.shields.io/badge/React-18.3-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178c6.svg)

---

## 📋 Descripción

Landing page moderna y responsive diseñada para **Victoria's Glow by: Agus**, emprendimiento especializado en la reventa de productos originales Victoria's Secret importados a Argentina.

### ✨ Características Principales

- 🎨 **Diseño Elegante**: Paleta de colores rosados con tipografías Playfair Display y Poppins
- 📱 **Mobile-First**: Diseño completamente responsive y optimizado para dispositivos móviles
- 🛒 **Carrito Virtual**: Sistema de carrito con envío directo a WhatsApp
- 🔍 **Búsqueda en Tiempo Real**: Filtrado instantáneo de productos
- 🏷️ **Catálogo Organizado**: 17 productos distribuidos en 5 categorías con sistema de tabs
- 🖼️ **Galería de Imágenes**: Múltiples imágenes por producto con navegación interactiva
- ♿ **Accesibilidad WCAG 2.1 AA**: Skip links, ARIA labels, navegación por teclado
- ⚡ **Performance Optimizado**: Carga rápida y animaciones suaves
- 📬 **Integración WhatsApp**: Consultas directas con productos del carrito
- 📸 **Enlace a Instagram**: Botón flotante a perfil de Instagram

---

## 🚀 Deploy en Vercel

### Opción 1: Deploy con un Click (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TU_USUARIO/victorias-glow)

### Opción 2: Deploy Manual

#### Paso 1: Crear Cuenta en Vercel

1. Ve a [https://vercel.com/signup](https://vercel.com/signup)
2. Regístrate con tu cuenta de GitHub, GitLab o email
3. Confirma tu cuenta

#### Paso 2: Instalar Vercel CLI (Opcional)

```bash
npm install -g vercel
```

#### Paso 3: Deploy desde Figma Make

**Desde la interfaz de Figma Make:**

1. Click en el botón "Export" o "Deploy"
2. Selecciona "Vercel" como plataforma
3. Autoriza la conexión con Vercel
4. Sigue las instrucciones en pantalla

**Desde la terminal:**

```bash
# Login a Vercel
vercel login

# Deploy el proyecto
vercel

# Para deploy a producción
vercel --prod
```

#### Paso 4: Configuración del Deploy

Vercel detectará automáticamente:
- ✅ Framework: Vite
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

**Solo haz click en "Deploy"**

---

## 🌐 Conectar Dominio Personalizado

### Paso 1: Registrar tu Dominio

#### Opción A: Dominio .com.ar (RECOMENDADO para Argentina)

1. Ve a [NIC Argentina](https://nic.ar)
2. Busca `victoriasglow.com.ar`
3. Registra el dominio (~$3.000-5.000 ARS/año)

#### Opción B: Dominio .com Internacional

1. Ve a [Namecheap](https://www.namecheap.com), [Google Domains](https://domains.google) o [GoDaddy](https://www.godaddy.com)
2. Busca `victoriasglow.com`
3. Registra el dominio (~USD 10-15/año)

### Paso 2: Configurar el Dominio en Vercel

1. **En tu proyecto de Vercel:**
   - Ve a Settings → Domains
   - Click en "Add Domain"
   - Ingresa tu dominio: `victoriasglow.com.ar` o `www.victoriasglow.com.ar`

2. **Configurar DNS:**

   Vercel te dará registros DNS para configurar. Copia estos valores:

   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21
   
   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

3. **En tu proveedor de dominio:**
   - Ve a la configuración de DNS
   - Agrega los registros proporcionados por Vercel
   - Guarda los cambios

4. **Espera la propagación:**
   - Puede tomar de 5 minutos a 48 horas
   - Vercel te notificará cuando esté listo
   - Certificado SSL se generará automáticamente

### Paso 3: Configurar Email Profesional (Opcional)

#### Opción A: Google Workspace (~$6 USD/mes)

1. Ve a [Google Workspace](https://workspace.google.com)
2. Configura `contacto@victoriasglow.com.ar`
3. Sigue las instrucciones de verificación de dominio

#### Opción B: Zoho Mail (GRATIS hasta 5 usuarios)

1. Ve a [Zoho Mail](https://www.zoho.com/mail/)
2. Regístrate gratis
3. Configura `contacto@victoriasglow.com.ar`
4. Agrega los registros MX proporcionados por Zoho

Registros MX típicos:
```
Prioridad: 10
Valor: mx.zoho.com

Prioridad: 20
Valor: mx2.zoho.com
```

---

## 📊 Configuración de Analytics (Opcional)

### Google Analytics 4

1. **Crear cuenta de Google Analytics:**
   - Ve a [Google Analytics](https://analytics.google.com)
   - Crea una propiedad GA4
   - Copia tu Measurement ID (formato: `G-XXXXXXXXXX`)

2. **Agregar a tu sitio:**
   
   En el archivo `/index.html`, agrega antes de `</head>`:

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

### Meta Pixel (para Instagram/Facebook Ads)

1. **Crear Meta Pixel:**
   - Ve a [Meta Business Suite](https://business.facebook.com)
   - Events Manager → Connect Data Sources → Web → Meta Pixel
   - Copia tu Pixel ID

2. **Agregar a tu sitio:**

   En el archivo `/index.html`, agrega antes de `</head>`:

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
   <noscript>
     <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=TU_PIXEL_ID&ev=PageView&noscript=1"/>
   </noscript>
   ```

---

## 🛠️ Desarrollo Local

### Requisitos Previos

- Node.js 18+ y npm instalados
- Editor de código (VS Code recomendado)

### Instalación

```bash
# Clonar o descargar el proyecto
cd victorias-glow-by-agus

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir en el navegador
# http://localhost:5173
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor local

# Producción
npm run build        # Genera build optimizado
npm run preview      # Preview del build

# Linting
npm run lint         # Verifica código
```

---

## 📁 Estructura del Proyecto

```
victorias-glow-by-agus/
├── components/              # Componentes React
│   ├── ui/                 # Componentes UI de Shadcn
│   ├── figma/             # Componentes de Figma
│   ├── CartButton.tsx     # Botón flotante del carrito
│   ├── CartContext.tsx    # Contexto global del carrito
│   ├── CartSheet.tsx      # Panel lateral del carrito
│   ├── Header.tsx         # Header con navegación
│   ├── Hero.tsx           # Sección hero
│   ├── InstagramButton.tsx # Botón flotante Instagram
│   ├── Logo.tsx           # Componente del logo
│   ├── ProductCard.tsx    # Tarjeta de producto
│   └── WhatsAppButton.tsx # Botón flotante WhatsApp
├── styles/
│   └── globals.css        # Estilos globales y variables
├── App.tsx                # Componente principal
├── index.html             # HTML principal
├── package.json           # Dependencias
├── tailwind.config.js     # Configuración Tailwind
├── tsconfig.json          # Configuración TypeScript
├── vite.config.ts         # Configuración Vite
├── vercel.json            # Configuración Vercel
├── .gitignore             # Archivos ignorados
└── README.md              # Este archivo
```

---

## 🎨 Personalización

### Cambiar Colores

Edita `/styles/globals.css`:

```css
:root {
  --color-primary: #C85A7C;      /* Rosa principal */
  --color-primary-dark: #A94967;  /* Rosa oscuro */
  --color-primary-light: #E91E63; /* Rosa claro */
}
```

### Actualizar Productos

Edita `/App.tsx` en el array `products`:

```typescript
const products = [
  {
    id: "1",
    name: "Nombre del Producto",
    description: "Descripción del producto",
    price: "$25.000",
    image: imagenImportada,  // o [imagen1, imagen2, imagen3]
    category: "Lencería",    // o "Fragancias", "Cuidado Personal", etc.
    isNew: true,
  },
  // ... más productos
];
```

### Cambiar Número de WhatsApp

Busca y reemplaza en todos los archivos:

```
5491127329853
```

Por tu número (formato internacional sin +):
```
549TUTELEFONO
```

### Cambiar Instagram

En `/components/InstagramButton.tsx`:

```typescript
window.open(
  "https://www.instagram.com/TU_USUARIO",
  "_blank"
);
```

---

## 📱 Información de Contacto

- **WhatsApp**: +54 9 11 2732-9853
- **Instagram**: [@victoriasglow.byagus](https://www.instagram.com/victoriasglow.byagus)
- **Ubicación**: Argentina

---

## ✅ Checklist de Lanzamiento

### Antes del Deploy

- [x] Revisar todos los textos y descripciones
- [x] Verificar precios de productos
- [x] Comprobar imágenes de productos
- [x] Testear en mobile, tablet y desktop
- [x] Verificar enlaces de WhatsApp e Instagram
- [x] Revisar accesibilidad
- [x] Optimizar imágenes

### Después del Deploy

- [ ] Registrar dominio personalizado
- [ ] Configurar email profesional
- [ ] Agregar Google Analytics
- [ ] Agregar Meta Pixel (si usarás ads)
- [ ] Configurar Google Business Profile
- [ ] Crear tarjetas de presentación con el dominio
- [ ] Actualizar bio de Instagram con el dominio
- [ ] Compartir con clientes y contactos

### Marketing Digital

- [ ] Optimizar SEO (meta tags, descripciones)
- [ ] Crear contenido para Instagram
- [ ] Configurar Instagram Shopping
- [ ] Planear campañas de ads
- [ ] Crear estrategia de contenido
- [ ] Recolectar testimonios de clientes

---

## 🔐 Seguridad y Privacidad

- ✅ HTTPS automático con Vercel
- ✅ Headers de seguridad configurados
- ✅ No se almacenan datos sensibles
- ✅ Integración segura con WhatsApp
- ✅ Sin cookies de terceros innecesarias

**Nota Importante**: Esta landing page NO está diseñada para recolectar datos personales sensibles ni procesar pagos directamente. Todas las transacciones se manejan a través de WhatsApp.

---

## 📄 Licencia

Este proyecto es propiedad de **Victoria's Glow by: Agus**.

---

## 🆘 Soporte

Si tenés problemas con el deploy o necesitás ayuda:

1. **Documentación de Vercel**: [https://vercel.com/docs](https://vercel.com/docs)
2. **Soporte de Vercel**: [https://vercel.com/support](https://vercel.com/support)
3. **Contacto directo**: Consultá por WhatsApp

---

## 🎯 Próximos Pasos Sugeridos

1. **Registrar dominio** (prioridad alta)
2. **Configurar email profesional**
3. **Agregar Google Analytics**
4. **Crear Google Business Profile**
5. **Optimizar para SEO local**
6. **Implementar sistema de pagos** (Mercado Pago)
7. **Agregar más productos al catálogo**
8. **Crear sección de testimonios**
9. **Implementar newsletter**
10. **Expandir a marketplace** (Instagram Shopping)

---

## 🌟 Agradecimientos

Desarrollado con ❤️ para **Victoria's Glow by: Agus**

Tecnologías utilizadas:
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Shadcn/ui
- Lucide Icons
- Vercel

---

**¡Éxito con tu emprendimiento! 🚀✨**

