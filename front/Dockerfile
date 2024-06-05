FROM node:18.13-alpine
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]