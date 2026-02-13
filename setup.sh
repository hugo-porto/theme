#!/bin/bash

# Setup script for Nicolas Palavecino Personal Website
# This script automates the initial setup process

set -e

echo "🚀 Setting up Nicolas Palavecino Personal Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed."
    echo "Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version must be 18 or higher."
    echo "Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp .env.example .env.local
    echo "✅ .env.local created (edit this file with your values)"
else
    echo "ℹ️  .env.local already exists"
fi
echo ""

# Test build
echo "🔨 Testing production build..."
npm run build
echo "✅ Build successful"
echo ""

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "📚 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit: Personal website ready for production"
    echo "✅ Git repository initialized"
else
    echo "ℹ️  Git repository already initialized"
fi
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Setup complete! Here's what to do next:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1️⃣  Start the development server:"
echo "   npm run dev"
echo ""
echo "2️⃣  Open http://localhost:3000 in your browser"
echo ""
echo "3️⃣  Customize the content:"
echo "   - Edit src/app/page.tsx (homepage)"
echo "   - Edit src/app/about/page.tsx (about page)"
echo "   - Add blog posts in src/content/posts/"
echo ""
echo "4️⃣  When ready to deploy:"
echo "   - Create a GitHub repository"
echo "   - Push your code: git remote add origin [your-repo-url]"
echo "   - Follow DEPLOYMENT.md for Netlify setup"
echo ""
echo "📚 Documentation:"
echo "   - README.md - Full project documentation"
echo "   - DEPLOYMENT.md - Step-by-step deployment guide"
echo "   - CONTENT-STRATEGY.md - Content ideas and strategy"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎉 Happy building!"
echo ""
