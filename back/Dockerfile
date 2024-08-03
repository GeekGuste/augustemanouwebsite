FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN yarn install
RUN yarn build
EXPOSE 3030
CMD ["node", "dist/index.js"]