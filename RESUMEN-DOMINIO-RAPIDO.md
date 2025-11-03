# ⚡ RESUMEN RÁPIDO: Dominio .com.ar → Vercel

## 🎯 PROCESO EN 2 PASOS:

---

## PASO 1️⃣: EN VERCEL (5 min)

### 1. Ve a tu proyecto en Vercel:
```
https://vercel.com/dashboard
→ Tu proyecto
→ Settings
→ Domains
```

### 2. Agrega tu dominio:
```
Campo: "Add a domain"
Escribe: tudominio.com.ar
Click: "Add"
```

### 3. Anota los valores DNS que Vercel te muestra:
```
✍️ Tipo A:
   Name: @
   Value: 76.76.21.21

✍️ Tipo CNAME (opcional):
   Name: www
   Value: cname.vercel-dns.com
```

**⚠️ NO CIERRES esta pantalla, necesitás estos valores!**

---

## PASO 2️⃣: EN NIC ARGENTINA (5 min)

### 1. Accede a NIC Argentina:
```
https://nic.ar
→ Iniciar Sesión
→ Panel de Control
→ Mis Dominios
→ Selecciona tu .com.ar
→ Configuración DNS
```

### 2. Agrega registro A:
```
┌─────────────────────────────┐
│ Tipo:    A                  │
│ Host:    @ (o deja vacío)   │
│ Valor:   76.76.21.21        │ ← IP de Vercel
│ TTL:     3600               │
└─────────────────────────────┘

Click: "Agregar" o "Guardar"
```

### 3. Agrega registro CNAME (opcional, para www):
```
┌─────────────────────────────┐
│ Tipo:    CNAME              │
│ Host:    www                │
│ Valor:   cname.vercel-dns.com │
│ TTL:     3600               │
└─────────────────────────────┘

Click: "Agregar" o "Guardar"
```

### 4. Guarda cambios:
```
Click: "Guardar cambios" o "Aplicar"
```

**✅ ¡Listo!**

---

## ⏱️ ESPERA (2-4 horas)

### Propagación DNS:
- **Mínimo:** 30 minutos
- **Normal:** 2-4 horas
- **Máximo:** 48 horas

Durante este tiempo:
- DNS se propagan globalmente
- Vercel genera certificado HTTPS automáticamente

**💡 TIP:** Ve a tomar un café ☕ y vuelve en 2-3 horas

---

## ✅ VERIFICACIÓN

### Opción 1: Desde navegador
```
1. Abre navegador (modo incógnito)
2. Visita: https://tudominio.com.ar
3. Deberías ver: Tu sitio de Victoria's Glow ✨
```

### Opción 2: Desde Vercel
```
Vercel → Settings → Domains

Deberías ver:
✅ tudominio.com.ar - Valid Configuration
```

### Opción 3: Herramienta online
```
Ve a: https://dnschecker.org
Ingresa: tudominio.com.ar
Tipo: A
Deberías ver: 76.76.21.21 en verde ✅
```

---

## 🎉 RESULTADO FINAL:

```
✅ https://tudominio.com.ar
   → Tu sitio de Victoria's Glow

✅ https://www.tudominio.com.ar
   → Redirige a tudominio.com.ar

✅ HTTPS seguro con certificado SSL 🔒

✅ Deploy automático sigue funcionando
   (cada git push actualiza el sitio)
```

---

## ⚠️ SI NO FUNCIONA:

### Error: "Invalid Configuration" en Vercel
**Solución:** Espera 30-60 minutos más

### Error: Sitio no carga
**Solución:** 
1. Verifica registros DNS en NIC Argentina
2. Espera 2-4 horas
3. Limpia cache del navegador (Ctrl+Shift+Delete)

### Error: "Not Secure" en navegador
**Solución:** Espera 15-30 minutos (certificado SSL generándose)

---

## 📚 GUÍA COMPLETA:

Para más detalles, problemas específicos, y explicaciones:
👉 Lee: `GUIA-DOMINIO-NICARG-VERCEL.md`

---

## 📋 CHECKLIST:

- [ ] Agregar dominio en Vercel
- [ ] Anotar valores DNS de Vercel
- [ ] Acceder a panel de NIC Argentina
- [ ] Agregar registro A en NIC Argentina
- [ ] (Opcional) Agregar registro CNAME en NIC Argentina
- [ ] Guardar cambios en NIC Argentina
- [ ] Esperar 2-4 horas
- [ ] Verificar que funcione
- [ ] Verificar HTTPS (🔒)
- [ ] ¡Celebrar! 🎉

---

## 🎯 VALORES DE EJEMPLO:

Si tu dominio es: **victoriasglow.com.ar**

### En NIC Argentina:
```
Registro A:
  Tipo:  A
  Host:  @
  Valor: 76.76.21.21

Registro CNAME:
  Tipo:  CNAME
  Host:  www
  Valor: cname.vercel-dns.com
```

### Resultado:
```
✅ victoriasglow.com.ar → Tu sitio
✅ www.victoriasglow.com.ar → Redirige
```

---

## ⏱️ TIMELINE:

```
00:00 - Configuras en Vercel
00:05 - Configuras DNS en NIC Argentina
00:30 - DNS empiezan a propagar
02:00 - DNS propagados (mayoría servidores)
02:30 - Vercel genera SSL
03:00 - ✅ LISTO! Dominio funcionando
```

---

## 💡 RECUERDA:

✅ **No necesitás tocar nada más después**
- Cada `git push` actualiza el sitio automáticamente
- El dominio sigue apuntando a Vercel
- HTTPS se renueva automáticamente

✅ **Tus productos se siguen agregando igual**
- Editas `App.tsx`
- Haces `git push`
- Sitio actualizado en 1-2 minutos

✅ **Dominio Vercel original sigue funcionando**
- `tudominio.com.ar` (nuevo, principal)
- `victorias-glow-by-agus.vercel.app` (backup)

---

**¡TODO LISTO EN 10 MINUTOS + ESPERA!** 🚀

Para guía detallada: `GUIA-DOMINIO-NICARG-VERCEL.md`
