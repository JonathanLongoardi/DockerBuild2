FROM node:14

COPY src/package.json ./

COPY src/app.js ./

EXPOSE $PORT

RUN npm install mysql

RUN npm install 

CMD ["node","app.js"]
