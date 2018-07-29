FROM mhart/alpine-node:8

COPY ./ ./

RUN npm install && npm run build && npm prune --production

CMD [ "npm", "start" ]
