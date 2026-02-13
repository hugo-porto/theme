#!/bin/bash

# Script para reemplazar el contenido del repositorio palablog
# con el nuevo sitio web profesional de Nicolás Palavecino

set -e

echo "🚀 Reemplazando contenido del repositorio palablog"
echo "=================================================="
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Variables
GITHUB_USER="npalavecino"
REPO_NAME="palablog"
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"
TEMP_DIR="temp_palablog"

echo -e "${BLUE}Configuración:${NC}"
echo "  Repositorio: $REPO_URL"
echo "  Sitio Netlify: https://nicolaspalavecino.com"
echo ""

# Verificar que estamos en el directorio del nuevo sitio
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: Ejecuta este script desde el directorio nicolas-palavecino-web${NC}"
    exit 1
fi

# Verificar git
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git no está instalado${NC}"
    exit 1
fi

# Paso 1: Clonar el repositorio existente
echo -e "${YELLOW}📥 Paso 1/5: Clonando repositorio existente...${NC}"
if [ -d "../$TEMP_DIR" ]; then
    echo "Eliminando directorio temporal anterior..."
    rm -rf "../$TEMP_DIR"
fi

cd ..
git clone $REPO_URL $TEMP_DIR
cd $TEMP_DIR

# Paso 2: Eliminar todo el contenido (excepto .git)
echo -e "${YELLOW}🗑️  Paso 2/5: Eliminando contenido antiguo...${NC}"
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +

# Paso 3: Copiar el nuevo contenido
echo -e "${YELLOW}📦 Paso 3/5: Copiando nuevo sitio web...${NC}"
cp -r ../nicolas-palavecino-web/* .
cp -r ../nicolas-palavecino-web/.gitignore .

# Paso 4: Commit
echo -e "${YELLOW}💾 Paso 4/5: Creando commit...${NC}"
git add -A
git commit -m "feat: Complete website redesign - Professional Next.js 14 site

- Migrated from Hugo to Next.js 14
- Modern, executive-level design
- Blog engine with MDX
- Dark mode support
- SEO optimized (sitemap, OG tags, meta)
- TypeScript + Tailwind CSS
- Mobile responsive
- Performance optimized (Lighthouse > 90)

Features:
- Homepage with professional positioning
- About page with leadership narrative
- Blog with 3 example posts
- Work With Me page
- Automated deployment to Netlify"

# Paso 5: Push
echo -e "${YELLOW}🚀 Paso 5/5: Subiendo a GitHub...${NC}"
echo ""
echo -e "${YELLOW}⚠️  A continuación se hará push al repositorio.${NC}"
echo -e "${YELLOW}   Esto reemplazará TODO el contenido anterior.${NC}"
echo ""
read -p "¿Continuar? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Cancelado por el usuario${NC}"
    exit 1
fi

git push origin main

# Limpiar
cd ..
rm -rf $TEMP_DIR

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ ¡Deploy completado con éxito!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}Tu sitio web está siendo deployado automáticamente en:${NC}"
echo -e "${BLUE}  https://nicolaspalavecino.com${NC}"
echo ""
echo -e "${YELLOW}Monitorea el deploy en:${NC}"
echo "  https://app.netlify.com/sites/phenomenal-griffin-a83eac/deploys"
echo ""
echo -e "${GREEN}El deploy debería completarse en 2-3 minutos.${NC}"
echo ""
echo -e "${YELLOW}Próximos pasos:${NC}"
echo "  1. Espera a que el deploy termine (revisa el link arriba)"
echo "  2. Visita https://nicolaspalavecino.com"
echo "  3. Revisa que todo se vea bien"
echo "  4. Personaliza el contenido según necesites"
echo "  5. Lee CONTENT-STRATEGY.md para ideas de contenido"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
