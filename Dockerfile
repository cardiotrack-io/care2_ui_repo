FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "run", "dev" ]

# FROM node:18-alpine

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm i -g serve
# COPY . .
# RUN npm run build
# EXPOSE 4000
# CMD [ "npm", "run", "dev"]