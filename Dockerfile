FROM node:20

ARG ENVIRONMENT
ENV ENVIRONMENT $ENVIRONMENT
CMD echo $ENVIRONMENT

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY ./.env.development /app/
COPY ./.env.production /app/
EXPOSE 4000

#CMD [ "npm", "run", "$NPM_CMD" ]
RUN if [ "$ENVIRONMENT" = "development" ] ; then \
  CMD [ "npm", "run", "dev"] ; \
  fi
RUN if [ "$ENVIRONMENT" = "production" ] ; then \
CMD [ "npm", "run", "build"] ; \
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