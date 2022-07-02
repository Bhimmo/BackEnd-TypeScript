FROM node:16-alpine

WORKDIR /app

COPY ./package.json /app

ENV MONGO_URL=""

EXPOSE 3000