FROM node:16-alpine

WORKDIR /app

COPY ./package.json /app

EXPOSE 3000