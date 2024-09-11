# Use a imagem oficial do Node.js para a versão 20 (como mencionado)
FROM node:20-alpine AS builder

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie apenas os arquivos essenciais para a instalação de dependências
COPY package.json package-lock.json* ./ 

# Instale as dependências em modo de build
RUN npm ci --only=production

# Copie o restante dos arquivos da aplicação para dentro do container
COPY . .

# Compile a aplicação Next.js
RUN npm run build

# Reduza a imagem final
FROM node:20-alpine AS runner

# Defina o diretório de trabalho
WORKDIR /app

# Copie apenas o build e as dependências de produção da etapa anterior
COPY --from=builder /app ./

# Exponha a porta padrão do Next.js
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start"]
