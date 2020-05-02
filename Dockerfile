FROM node:12.16.1-stretch
WORKDIR /blog/current
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
USER node
