FROM node:20

ARG NPM_CMD
RUN echo "NPM_CMD--$NPM_CMD"
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.development /app/
COPY ./.env.production /app/
EXPOSE 4000

RUN if [ "$NPM_CMD" is "" or "$NPM_CMD" is "dev"]; then \
  CMD [ "npm", "run", "dev" ]
fi

RUN if [ "$NPM_CMD" is "build"]; then \
  CMD [ "npm", "run", "build" ]
fi

# FROM node:18-alpine

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm i -g serve
# COPY . .
# RUN npm run build
# EXPOSE 4000
# CMD [ "npm", "run", "dev"]