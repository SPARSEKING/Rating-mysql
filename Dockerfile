FROM node:14.16.1-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install 

COPY . .