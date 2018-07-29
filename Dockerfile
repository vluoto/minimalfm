FROM mhart/alpine-node:8

COPY ./ ./

RUN npm install && npm run build

CMD [ "npm", "start" ]
