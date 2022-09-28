FROM node:18.7.0

WORKDIR /back
COPY package*.json ./

RUN npm i
COPY . ./