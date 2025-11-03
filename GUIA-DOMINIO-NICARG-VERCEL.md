# 🌐 GUÍA: Conectar Dominio .com.ar (NIC Argentina) a Vercel

## 📋 REQUISITOS PREVIOS:

- ✅ Dominio .com.ar comprado en NIC Argentina
- ✅ Proyecto deployado en Vercel
- ✅ Acceso al panel de NIC Argentina
- ✅ Acceso al dashboard de Vercel

**⏱️ Tiempo estimado:** 15-30 minutos (+ 24-48hs propagación DNS)

---

## 🎯 PROCESO COMPLETO (2 PARTES):

### PARTE 1: Configurar en Vercel
### PARTE 2: Configurar DNS en NIC Argentina

---

# PARTE 1: CONFIGURAR EN VERCEL

## 📍 PASO 1: Acceder a tu proyecto en Vercel

1. **Ve a Vercel:**
   - Abrí https://vercel.com/dashboard
   - Inicia sesión con tu cuenta

2. **Selecciona tu proyecto:**
   - Busca "victorias-glow-by-agus" (o el nombre que tenga)
   - Click en el proyecto

---

## 📍 PASO 2: Ir a configuración de dominios

1. **Click en "Settings"** (arriba)
2. **Click en "Domains"** (menú lateral izquierdo)

Vas a ver una pantalla con:
- Tu dominio actual de Vercel (ej: `victorias-glow-by-agus.vercel.app`)
- Un campo para agregar dominio personalizado

---

## 📍 PASO 3: Agregar tu dominio .com.ar

### Opción A: Dominio principal (recomendado)

1. **En el campo "Add a domain"**, escribí:
   ```
   tudominio.com.ar
   ```
   
   **Ejemplo:**
   ```
   victoriasglow.com.ar
   ```

2. **Click en "Add"**

3. Vercel te va a mostrar una pantalla con 2 opciones:
   - ✅ **"Add domain and redirect www to it"** ← Selecciona esta
   - ⚪ "Add domain as alias"

4. **Click en "Add"**

---

### Opción B: Con www (opcional, después de configurar el principal)

Si también querés que funcione `www.tudominio.com.ar`:

1. Repetí el proceso agregando:
   ```
   www.tudominio.com.ar
   ```

2. Vercel automáticamente va a redirigir www → dominio principal

---

## 📍 PASO 4: Vercel te muestra los registros DNS

Después de agregar el dominio, Vercel te va a mostrar algo así:

```
⚠️ Invalid Configuration

To configure your domain, add the following records to your DNS provider:

Type    Name    Value
────────────────────────────────────────────────
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

**⚠️ IMPORTANTE:** NO CIERRES ESTA PANTALLA. Necesitás estos valores para el siguiente paso.

---

## 📝 ANOTAR LOS VALORES (EJEMPLO):

Vercel te va a dar valores específicos. Generalmente son:

### **Para dominio principal (`tudominio.com.ar`):**
- **Tipo:** A Record
- **Name/Host:** `@` (raíz del dominio)
- **Value/Points to:** `76.76.21.21` (IP de Vercel)

### **Para www (`www.tudominio.com.ar`):**
- **Tipo:** CNAME
- **Name/Host:** `www`
- **Value/Points to:** `cname.vercel-dns.com`

**📋 TIP:** Anotalos en un bloc de notas para el siguiente paso.

---

# PARTE 2: CONFIGURAR DNS EN NIC ARGENTINA

## 📍 PASO 5: Acceder al panel de NIC Argentina

1. **Ve a:** https://nic.ar
2. **Click en "Iniciar Sesión"** (arriba derecha)
3. **Ingresa tu usuario y contraseña**
4. **Ve al "Panel de Control"**

---

## 📍 PASO 6: Seleccionar tu dominio

1. En el panel de control, busca **"Mis Dominios"**
2. Selecciona tu dominio `.com.ar`
3. Click en **"Administrar DNS"** o **"Configuración DNS"**

---

## 📍 PASO 7: Configurar registros DNS

### 🔧 **IMPORTANTE:** NIC Argentina tiene 2 modos:

#### **MODO A: DNS Externos (MÁS COMÚN)**
Si usás servidores DNS externos (Cloudflare, etc.)

#### **MODO B: DNS de NIC Argentina**
Si usás los servidores DNS de NIC directamente

---

### 🎯 **OPCIÓN RECOMENDADA: DNS de NIC Argentina**

1. **Asegurate de usar los DNS de NIC:**
   ```
   Nameservers:
   - ns1.nic.ar
   - ns2.nic.ar
   ```

2. **Ve a "Configuración de Zona DNS"** o "DNS Records"

3. **Elimina registros antiguos (si hay):**
   - Borra registros A viejos que apunten a otro hosting
   - Deja solo los que vas a agregar nuevos

---

## 📍 PASO 8: Agregar registros DNS

### ✅ **REGISTRO 1: A Record (dominio principal)**

**Valores a ingresar:**

| Campo | Valor |
|-------|-------|
| **Tipo** | `A` |
| **Host / Nombre** | `@` o deja vacío o `tudominio.com.ar` |
| **Apunta a / Valor** | `76.76.21.21` (IP que te dio Vercel) |
| **TTL** | `3600` (o deja el default) |

**Ejemplo:**
```
Tipo:     A
Host:     @
Valor:    76.76.21.21
TTL:      3600
```

**Click en "Agregar" o "Guardar"**

---

### ✅ **REGISTRO 2: CNAME (www - OPCIONAL)**

**Valores a ingresar:**

| Campo | Valor |
|-------|-------|
| **Tipo** | `CNAME` |
| **Host / Nombre** | `www` |
| **Apunta a / Valor** | `cname.vercel-dns.com` |
| **TTL** | `3600` |

**Ejemplo:**
```
Tipo:     CNAME
Host:     www
Valor:    cname.vercel-dns.com
TTL:      3600
```

**Click en "Agregar" o "Guardar"**

---

## 📍 PASO 9: Guardar cambios

1. **Click en "Guardar cambios"** o **"Aplicar"**
2. NIC Argentina puede pedirte confirmación
3. **Confirma** los cambios

**✅ ¡Listo en el lado de NIC Argentina!**

---

# PARTE 3: VERIFICACIÓN

## 📍 PASO 10: Esperar propagación DNS

⏱️ **Tiempo de espera:**
- **Mínimo:** 15-30 minutos
- **Normal:** 2-4 horas
- **Máximo:** 24-48 horas

**Durante este tiempo:**
- Los DNS se propagan globalmente
- Puede que veas tu sitio viejo (si había)
- Puede que veas errores temporales
- **Es normal, NO te preocupes**

---

## 📍 PASO 11: Verificar configuración

### **Opción 1: Desde Vercel (más fácil)**

1. Volvé a tu proyecto en Vercel
2. Ve a Settings → Domains
3. Deberías ver:
   ```
   ✅ tudominio.com.ar - Valid Configuration
   ```

Si dice `⚠️ Invalid Configuration`:
- Espera un poco más (DNS aún propagando)
- Verifica los registros en NIC Argentina

---

### **Opción 2: Herramientas online**

#### **A) Verificar registro A:**
- Ve a: https://dnschecker.org
- Ingresa: `tudominio.com.ar`
- Tipo: `A`
- Deberías ver: `76.76.21.21` en todos los servidores

#### **B) Verificar CNAME (www):**
- Ingresa: `www.tudominio.com.ar`
- Tipo: `CNAME`
- Deberías ver: `cname.vercel-dns.com`

---

### **Opción 3: Desde tu navegador**

1. **Abrí tu navegador (Incógnito recomendado)**
2. **Visita:** `http://tudominio.com.ar`
3. **Deberías ver:** Tu sitio de Victoria's Glow ✨

Si no funciona aún:
- Espera 15-30 minutos más
- Limpia cache del navegador (Ctrl+Shift+Delete)
- Prueba en otro navegador o dispositivo

---

## 📍 PASO 12: Configurar HTTPS (automático)

Vercel automáticamente configura **HTTPS (SSL/TLS)** usando Let's Encrypt.

**Esto puede tardar:**
- 15-30 minutos después de que DNS esté configurado

**Verificar HTTPS:**
1. Visita: `https://tudominio.com.ar` (con https://)
2. Deberías ver el candado 🔒 en el navegador

**Si no funciona:**
- Espera un poco más (Vercel emite certificado automáticamente)
- Puede tardar hasta 24hs en casos raros

---

# 🎯 RESUMEN VISUAL:

```
┌─────────────────────┐
│  NIC ARGENTINA      │
│  (tudominio.com.ar) │
└──────────┬──────────┘
           │
           │ DNS Apunta a:
           │ A → 76.76.21.21
           │ CNAME www → cname.vercel-dns.com
           │
           ▼
┌─────────────────────┐
│      VERCEL         │
│  (Tu proyecto)      │
└──────────┬──────────┘
           │
           │ Sirve tu sitio:
           │ victorias-glow-by-agus
           │
           ▼
┌─────────────────────┐
│   TU VISITANTE      │
│  Ve Victoria's Glow │
│  en tudominio.com.ar│
└─────────────────────┘
```

---

# 📋 CHECKLIST COMPLETO:

## En Vercel:
- [ ] Iniciar sesión en Vercel
- [ ] Ir a Settings → Domains
- [ ] Agregar `tudominio.com.ar`
- [ ] Anotar valores DNS (A y CNAME)
- [ ] (Opcional) Agregar `www.tudominio.com.ar`

## En NIC Argentina:
- [ ] Iniciar sesión en nic.ar
- [ ] Ir a "Mis Dominios"
- [ ] Seleccionar tu dominio .com.ar
- [ ] Ir a "Configuración DNS"
- [ ] Agregar registro A: `@` → `76.76.21.21`
- [ ] Agregar registro CNAME: `www` → `cname.vercel-dns.com`
- [ ] Guardar cambios

## Verificación:
- [ ] Esperar 15-30 minutos (mínimo)
- [ ] Verificar en dnschecker.org
- [ ] Verificar en Vercel (Valid Configuration)
- [ ] Abrir `tudominio.com.ar` en navegador
- [ ] Verificar HTTPS funciona (`https://`)
- [ ] Verificar redirección www → dominio principal

---

# ⚠️ PROBLEMAS COMUNES:

## ❌ Problema: "Invalid Configuration" en Vercel

**Causas:**
- DNS aún propagando
- Registros mal configurados en NIC Argentina

**Solución:**
1. Espera 30-60 minutos más
2. Verifica registros en NIC Argentina (paso 8)
3. Usa dnschecker.org para verificar propagación

---

## ❌ Problema: "ERR_NAME_NOT_RESOLVED"

**Causa:** DNS no propagados o mal configurados

**Solución:**
1. Verifica que agregaste el registro A correctamente
2. Espera 2-4 horas más
3. Limpia DNS cache local:
   ```bash
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   ```

---

## ❌ Problema: "Privacy Error" o "Not Secure"

**Causa:** Certificado SSL aún generándose

**Solución:**
1. Espera 15-30 minutos (Vercel lo genera automáticamente)
2. Si después de 24hs sigue igual, contacta soporte de Vercel

---

## ❌ Problema: Se ve el sitio viejo

**Causa:** Cache del navegador

**Solución:**
1. Abrí navegador en modo incógnito
2. O limpia cache (Ctrl+Shift+Delete)
3. Prueba desde otro dispositivo/red

---

## ❌ Problema: "This domain is not registered on Vercel"

**Causa:** No agregaste el dominio en Vercel

**Solución:**
1. Ve a Vercel → Settings → Domains
2. Agrega tu dominio .com.ar
3. Sigue los pasos desde el principio

---

# 💡 TIPS PRO:

### ✅ **Usar APEX domain (sin www):**
```
✅ Recomendado: victoriasglow.com.ar
⚪ Opcional:     www.victoriasglow.com.ar
```

Vercel automáticamente redirige www → dominio principal.

---

### ✅ **Configurar redirecciones:**

Si querés forzar HTTPS, Vercel lo hace automáticamente:
```
http://tudominio.com.ar → https://tudominio.com.ar ✅
```

---

### ✅ **Mantener dominio Vercel:**

Tu dominio original de Vercel sigue funcionando:
```
✅ tudominio.com.ar (nuevo, principal)
✅ victorias-glow-by-agus.vercel.app (backup)
```

Ambos sirven el mismo sitio.

---

# 📞 CONTACTOS ÚTILES:

### **Soporte NIC Argentina:**
- 🌐 Web: https://nic.ar/contacto
- 📧 Email: info@nic.ar
- 📞 Teléfono: (011) 5238-0047

### **Soporte Vercel:**
- 🌐 Docs: https://vercel.com/docs/concepts/projects/domains
- 💬 Discord: https://vercel.com/discord
- 📧 Email: support@vercel.com

---

# 🎓 EJEMPLO REAL:

Supongamos que tu dominio es: **victoriasglow.com.ar**

## En Vercel:
```
Domain to add: victoriasglow.com.ar
```

## En NIC Argentina:

### Registro A:
```
Tipo:    A
Host:    @ (o victoriasglow.com.ar)
Valor:   76.76.21.21
TTL:     3600
```

### Registro CNAME (opcional):
```
Tipo:    CNAME
Host:    www
Valor:   cname.vercel-dns.com
TTL:     3600
```

## Resultado:
```
✅ https://victoriasglow.com.ar → Tu sitio
✅ https://www.victoriasglow.com.ar → Redirige a anterior
✅ https://victorias-glow-by-agus.vercel.app → Sigue funcionando
```

---

# ⏱️ TIMELINE ESPERADO:

```
Hora 0:00  - Agregas dominio en Vercel
Hora 0:05  - Configuras DNS en NIC Argentina
Hora 0:30  - DNS empiezan a propagarse
Hora 2:00  - DNS propagados en mayoría de servidores
Hora 2:30  - Vercel genera certificado SSL
Hora 3:00  - ✅ Dominio funcionando con HTTPS
Hora 24:00 - DNS 100% propagados globalmente
```

**📍 Lo normal:** 2-4 horas  
**📍 Lo esperado:** Mismo día  
**📍 Lo máximo:** 48 horas  

---

# 🎯 VERIFICACIÓN FINAL:

Una vez que todo esté funcionando, verifica:

- [ ] ✅ `tudominio.com.ar` carga tu sitio
- [ ] ✅ `www.tudominio.com.ar` redirige a anterior
- [ ] ✅ HTTPS funciona (candado 🔒 en navegador)
- [ ] ✅ Certificado SSL válido (click en candado)
- [ ] ✅ Todos los productos cargan
- [ ] ✅ Imágenes cargan correctamente
- [ ] ✅ WhatsApp funciona
- [ ] ✅ Instagram funciona
- [ ] ✅ Carrito funciona
- [ ] ✅ Responsive mobile funciona

---

# 🎉 ¡FELICITACIONES!

Una vez completado, tendrás:

✅ **Dominio .com.ar profesional**  
✅ **HTTPS seguro (certificado SSL)**  
✅ **Deploy automático** (cada git push)  
✅ **CDN global de Vercel** (sitio rápido)  
✅ **Redirecciones automáticas**  
✅ **Tu emprendimiento 100% profesional** 💕

---

# 🔄 ACTUALIZACIONES FUTURAS:

**¿Necesitás cambiar algo después?**

### Cambiar contenido:
- Solo edita código y hace `git push`
- El dominio sigue funcionando igual

### Cambiar dominio:
- Agrega nuevo dominio en Vercel
- Repite proceso de DNS en NIC Argentina

### Renovar dominio:
- NIC Argentina te avisa antes de vencimiento
- Renova desde panel de NIC Argentina
- No necesitas reconfigurar nada en Vercel

---

**¿TODO CLARO?** 🚀

**¡Tu Victoria's Glow está a punto de tener dominio profesional!** ✨

Si algo no funciona, revisá la sección "Problemas Comunes" o avisame.

**¡Éxito!** 💪
