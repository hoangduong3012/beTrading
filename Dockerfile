FROM node:18.12.1 AS development

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app


COPY package.json package-lock.json ./
RUN npm install
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . .
CMD ["npm", "run", "develop"]


FROM node:18.12.1-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

CMD ["npm", "run", "start:prod"]