FROM node:latest AS prebuild

WORKDIR /app

COPY . /app

RUN yarn

RUN yarn build

FROM nginx:mainline-alpine-slim

COPY --from=prebuild /app/dist /usr/share/nginx/html