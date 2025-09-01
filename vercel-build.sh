#!/bin/bash

# Script de build personalizado para Vercel
echo "🚀 Iniciando build personalizado..."

# Limpar diretórios de build
echo "🧹 Limpando diretórios de build..."
rm -rf dist build

# Limpar cache
echo "🗑️ Limpando cache..."
rm -rf .vite .cache

# Instalar dependências
echo "📦 Instalando dependências..."
yarn install --frozen-lockfile

# Build limpo
echo "🔨 Executando build..."
yarn run build

# Verificar se o build foi bem-sucedido
if [ -d "dist" ]; then
    echo "✅ Build concluído com sucesso!"
    ls -la dist/
else
    echo "❌ Erro no build!"
    exit 1
fi
