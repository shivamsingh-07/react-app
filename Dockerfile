FROM node:14.15.4-slim

WORKDIR /usr/src/react-app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]
