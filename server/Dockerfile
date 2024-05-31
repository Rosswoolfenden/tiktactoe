FROM node:18-alpine

# Create directory that runs the app on docker
WORKDIR /app

# COPY package.json and package-lock.json files
COPY package.json package-lock.json ./
COPY package*.json ./

# COPY ENV variable
COPY .env ./
RUN npm install --save nodemon typescript ts-node ts-node-dev

# Install package.json dependencies
RUN npm install

# COPY
COPY . .

USER node
EXPOSE 4000
CMD ["npm", "run" , "dev"]