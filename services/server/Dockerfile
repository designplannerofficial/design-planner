FROM node:alpine

WORKDIR /app

COPY package.json/ .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 7777

CMD [ "npm", "start" ]