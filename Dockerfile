FROM node:14.18.1-buster as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app .

ENV HOST 0.0.0.0
EXPOSE 80

CMD [ "yarn", "start" ]