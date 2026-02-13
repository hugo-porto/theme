# 🚀 Deployment Guide

Esta guía te llevará paso a paso para deployar tu sitio web en Netlify usando GitHub.

## Prerequisitos

- Una cuenta de GitHub (gratuita)
- Una cuenta de Netlify (gratuita)
- Git instalado en tu computadora

## Paso 1: Preparar el Código Localmente

### 1.1 Navega al directorio del proyecto

```bash
cd nicolas-palavecino-web
```

### 1.2 Instala las dependencias

```bash
npm install
```

### 1.3 Prueba que todo funciona

```bash
npm run dev
```

Abre http://localhost:3000 y verifica que el sitio carga correctamente.

### 1.4 Verifica que el build funciona

```bash
npm run build
```

Si hay errores, corrígelos antes de continuar.

## Paso 2: Subir el Código a GitHub

### 2.1 Inicializa Git (si no está inicializado)

```bash
git init
```

### 2.2 Agrega todos los archivos

```bash
git add .
```

### 2.3 Haz el primer commit

```bash
git commit -m "Initial commit: Personal website ready for production"
```

### 2.4 Crea un repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `nicolas-palavecino-web`
3. Descripción: `Personal website for Nicolás Palavecino`
4. Elige "Private" o "Public" según prefieras
5. **NO** inicialices con README (ya lo tienes)
6. Click en "Create repository"

### 2.5 Conecta tu repositorio local a GitHub

Copia los comandos que GitHub te muestra y ejecútalos:

```bash
git remote add origin https://github.com/TU-USUARIO/nicolas-palavecino-web.git
git branch -M main
git push -u origin main
```

## Paso 3: Deploy en Netlify

### 3.1 Conecta Netlify con GitHub

1. Ve a https://app.netlify.com
2. Click en "Add new site" → "Import an existing project"
3. Click en "GitHub"
4. Autoriza Netlify para acceder a tu GitHub
5. Selecciona tu repositorio `nicolas-palavecino-web`

### 3.2 Configura el Build

Netlify debería detectar automáticamente Next.js. Verifica:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `out`

Si no lo detecta, agrégalo manualmente.

### 3.3 Deploy Settings Avanzados (Opcional)

Click en "Show advanced" y agrega variables de entorno si las necesitas:

```
NEXT_PUBLIC_SITE_URL=https://tu-dominio.netlify.app
```

### 3.4 Deploy

Click en "Deploy site"

Netlify comenzará a:
1. Clonar tu repositorio
2. Instalar dependencias
3. Ejecutar el build
4. Publicar el sitio

Esto toma 2-3 minutos.

### 3.5 Verifica el Deploy

Una vez completado, Netlify te dará una URL:
```
https://random-name-123456.netlify.app
```

Ábrela y verifica que todo funciona.

## Paso 4: Configurar Dominio Personalizado (Opcional)

### 4.1 Si tienes un dominio

1. En Netlify, ve a Site settings → Domain management
2. Click en "Add custom domain"
3. Ingresa tu dominio: `nicolaspalavecino.com`
4. Click en "Verify"

### 4.2 Configurar DNS

Netlify te dirá qué registros DNS agregar:

**Opción A: Usar Netlify DNS (Recomendado)**
1. Transfiere tus nameservers a Netlify
2. Netlify maneja todo automáticamente

**Opción B: DNS Externo**
Agrega estos registros en tu proveedor de DNS:

```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: random-name-123456.netlify.app
```

### 4.3 Habilitar HTTPS

Una vez configurado el dominio:
1. Netlify automáticamente provisiona un certificado SSL
2. Espera 5-10 minutos
3. Tu sitio estará disponible en `https://tudominio.com`

## Paso 5: Configurar Deploy Continuo

**¡Esto ya está configurado!**

Cada vez que hagas un push a GitHub:

```bash
git add .
git commit -m "Update blog post"
git push
```

Netlify automáticamente:
1. Detecta el cambio
2. Ejecuta el build
3. Deploya la nueva versión

## Paso 6: Optimizaciones Post-Deploy

### 6.1 Configurar Build Hooks (Opcional)

Si quieres rebuilds programados:

1. Site settings → Build & deploy → Build hooks
2. "Add build hook"
3. Nombre: `Scheduled rebuild`
4. Guarda la URL del webhook

### 6.2 Habilitar Deploy Previews

Ya está habilitado por defecto. Cada PR tendrá su propio preview.

### 6.3 Configurar Notificaciones

Site settings → Build & deploy → Deploy notifications

Puedes recibir notificaciones en:
- Email
- Slack
- Webhook

## Troubleshooting

### El build falla

**Error: "Command failed with exit code 1"**

1. Ejecuta `npm run build` localmente
2. Corrige cualquier error
3. Commit y push de nuevo

**Error: "Module not found"**

1. Verifica que todas las dependencias estén en `package.json`
2. No uses dependencias de `devDependencies` en el código de producción

### El sitio no carga correctamente

**Rutas no funcionan (404)**

- Verifica que `output: 'export'` esté en `next.config.js`
- Verifica que el publish directory sea `out`

**Dark mode no funciona**

- Verifica que `suppressHydrationWarning` esté en el `<html>` tag
- Clear cache del navegador

### Dominio personalizado no funciona

**DNS no propaga**

- La propagación DNS puede tomar 24-48 horas
- Usa https://www.whatsmydns.net para verificar

**SSL no se activa**

- Espera 10-15 minutos después de configurar el dominio
- Verifica que los registros DNS estén correctos

## Comandos Útiles de Git

```bash
# Ver cambios
git status

# Ver diferencias
git diff

# Agregar archivos específicos
git add src/app/page.tsx

# Deshacer cambios
git checkout -- filename

# Ver historial
git log --oneline

# Crear rama
git checkout -b feature/new-post

# Cambiar de rama
git checkout main

# Merge rama
git merge feature/new-post
```

## Workflow Recomendado

### Para actualizar contenido

```bash
# 1. Edita archivos
# 2. Prueba localmente
npm run dev

# 3. Build de prueba
npm run build

# 4. Commit y push
git add .
git commit -m "Add new blog post: [título]"
git push

# 5. Netlify deploya automáticamente
```

### Para cambios grandes

```bash
# 1. Crea una rama
git checkout -b feature/new-design

# 2. Trabaja en la rama
# ... edita archivos ...

# 3. Commit regularmente
git add .
git commit -m "Update header design"

# 4. Push de la rama
git push -u origin feature/new-design

# 5. Abre PR en GitHub
# Netlify creará un deploy preview automáticamente

# 6. Una vez aprobado, merge a main
git checkout main
git merge feature/new-design
git push
```

## Métricas de Performance

Después del deploy, verifica:

### Lighthouse Audit

1. Abre tu sitio en Chrome
2. Click derecho → "Inspect"
3. Tab "Lighthouse"
4. Click "Generate report"

**Targets:**
- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### Netlify Analytics (Opcional)

Netlify ofrece analytics (de pago) que muestra:
- Visitantes únicos
- Page views
- Bandwidth usage
- Top pages

## Mantenimiento

### Updates de Dependencias

Cada 2-3 meses:

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar Next.js
npm install next@latest react@latest react-dom@latest

# Actualizar todas las dev dependencies
npm update --save-dev

# Test y deploy
npm run build
git commit -am "Update dependencies"
git push
```

### Backup

Tu código está en GitHub - ese es tu backup principal.

Adicionalmente:
1. Netlify mantiene un historial de deploys
2. Puedes rollback a cualquier versión anterior
3. Site settings → Deploys → Ver lista de deploys

## Costos

### Netlify (Free Tier)

- 100GB bandwidth/mes
- 300 build minutes/mes
- Unlimited sites
- Deploy previews
- HTTPS automático

**Esto es más que suficiente para un sitio personal.**

### Si necesitas más:

- Pro: $19/mes - 400GB bandwidth
- Business: $99/mes - 1TB bandwidth

### GitHub (Free)

- Repositorios públicos ilimitados
- 1 repositorio privado
- Deploy CI/CD incluido

## Próximos Pasos

1. ✅ Deploy a Netlify
2. ⬜ Configurar dominio personalizado
3. ⬜ Agregar Google Analytics (opcional)
4. ⬜ Configurar newsletter (opcional)
5. ⬜ Escribir más blog posts
6. ⬜ Compartir en redes sociales

---

**¿Problemas? Revisa la documentación:**
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs
- GitHub: https://docs.github.com

**Todo listo. Tu sitio está en producción. 🚀**
