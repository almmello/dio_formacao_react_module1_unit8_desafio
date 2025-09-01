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

# Verificar se o Terser está disponível
echo "🔍 Verificando dependências de minificação..."
if ! yarn list terser > /dev/null 2>&1; then
    echo "⚠️ Terser não encontrado, instalando..."
    yarn add --dev terser
fi

# Build limpo
echo "🔨 Executando build..."
# Usar configuração específica para Vercel se disponível
if [ -f "vite.config.vercel.js" ]; then
    echo "📋 Usando configuração específica para Vercel..."
    yarn vite build --config vite.config.vercel.js
else
    echo "📋 Usando configuração padrão..."
    yarn run build
fi

# Verificar se o build foi bem-sucedido
if [ -d "dist" ]; then
    echo "✅ Build concluído com sucesso!"
    ls -la dist/
    echo "📊 Tamanho dos arquivos:"
    du -sh dist/*
else
    echo "❌ Erro no build!"
    exit 1
fi