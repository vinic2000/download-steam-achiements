#!/bin/bash

# Sair se der erro
set -e

echo "🧹 Limpando build anterior…"
rm -rf dist/

echo "🔷 Compilando TypeScript…"
npx tsc

if [ $? -ne 0 ]; then
    echo "❌ Erro ao compilar TypeScript!"
    exit 1
fi

echo "✅ Compilação concluída. Arquivos em ./dist"

echo "📦 Gerando executável para Windows x64 com pkg…"
npx pkg . --targets node18-win-x64 --output build/myapp.exe

if [ $? -ne 0 ]; then
    echo "❌ Erro ao gerar executável com pkg!"
    exit 1
fi

echo "🎉 Executável criado em: build/myapp.exe"
