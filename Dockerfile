
FROM node:22-alpine

WORKDIR /app
COPY package.json .
COPY script.js .
COPY index.html .
EXPOSE 3000

CMD ["npm", "start"]
