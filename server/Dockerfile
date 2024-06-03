FROM node:18-alpine

WORKDIR /app
COPY package.json package-lock.json ./
COPY package*.json ./
COPY .env ./
RUN npm install --save nodemon typescript ts-node ts-node-dev
RUN npm install
COPY . .

USER node
EXPOSE 4000
CMD ["npm", "start"]