FROM node:14-alpine

WORKDIR /app

COPY ./app/package*.json ./

RUN npm install

COPY ./app ./

EXPOSE 8080

CMD ["node" "app.js"]