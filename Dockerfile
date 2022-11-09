FROM node:16-alpine3.14

ENV NODE_ENV develop
ENV NODE_CONFIG_DIR /app/config/

USER root
WORKDIR /app

COPY . /app

RUN yarn install \
    && yarn build

EXPOSE 3000
CMD ["node", "dist/infrastructure/in/rest/main.js"]
