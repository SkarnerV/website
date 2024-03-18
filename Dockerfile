FROM node:latest AS prebuild

WORKDIR /app

COPY . /app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm build

FROM nginx:mainline-alpine-slim

COPY --from=prebuild /app/build /usr/share/nginx/html