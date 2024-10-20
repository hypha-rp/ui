FROM node:23-alpine AS build

WORKDIR /usr/
COPY *.json .
RUN npm ci --prefer-offline

COPY src ./src
COPY public ./public
RUN npm run build -- --output-path=/dist

FROM nginx:alpine AS server

LABEL org.opencontainers.image.source="https://github.com/hypha-rp/ui"
LABEL org.opencontainers.image.description="Image for the Hypha Angular UI"
LABEL org.opencontainers.image.licenses="Apache-2.0"

COPY --from=build /dist/browser /usr/share/nginx/html

WORKDIR /proxy
COPY /src/proxy/proxy.js .
COPY /src/proxy/package.json .

RUN apk add --no-cache nodejs npm && npm install
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["sh", "-c", "node /proxy/proxy.js & nginx -g 'daemon off;'"]
