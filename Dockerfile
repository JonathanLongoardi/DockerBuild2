FROM node:14


COPY src/package.json ./

COPY src/app.js ./


RUN npm install 


CMD ["node","app.js"]
