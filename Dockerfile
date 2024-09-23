FROM node:current-alpine

LABEL org.opencontainers.image.source=https://github.com/hypha-rp/ui
LABEL org.opencontainers.image.description=hypha-ui
LABEL org.opencontainers.image.licenses=Apache-2.0

ARG DEV=false

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install -g @angular/cli
RUN npm install

RUN if [ "$DEV" = "true" ]; then \
    apk add --no-cache git openssh-client make curl; \
    chown -R node:node /usr/src/app; \
fi

CMD ["ng", "serve", "--host", "0.0.0.0"]