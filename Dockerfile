FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.development /app/
COPY ./.env.production /app/
EXPOSE 4000

CMD [ "npm", "run", "${NPM_CMD}" ]

# FROM node:18-alpine

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm i -g serve
# COPY . .
# RUN npm run build
# EXPOSE 4000
# CMD [ "npm", "run", "dev"]