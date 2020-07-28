### [stage 1]
FROM node:14.5.0-alpine as prod_base

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock .npmrc ./
RUN yarn install --production

### [stage 2] - build app (typescript)
FROM prod_base as builder

# install npm packages from devDependencies (required for build)
RUN yarn install

COPY . .
RUN yarn build

### [stage 3] - package code
FROM prod_base

ENV NODE_ENV production

COPY --from=builder /usr/src/app/dist dist/

EXPOSE 3000 50051
CMD [ "node", "dist/server" ]
