# Imagem base leve com Node.js
FROM node:20-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia primeiro o package.json (aproveita cache do Docker)
COPY package.json ./

# Instala dependências (nenhuma extra neste caso, mas fica pronto)
RUN npm install --production

# Copia o restante do código
COPY . .

# Comando padrão ao rodar o container
CMD ["node", "index.js"]
