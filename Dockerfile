FROM  node:19-alpine3.15 as dev
WORKDIR /app
COPY package.json .
RUN npm install
CMD ["npm", "run", "start:dev"]

FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install 


FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package.json ./
COPY  images/ ./images
RUN npm install --omit=dev

FROM node:19-alpine3.15 as prod
EXPOSE 3200
WORKDIR /app
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/images/ ./images
CMD ["node", "dist/main"]


