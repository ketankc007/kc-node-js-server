FROM node:16-alpine AS build
WORKDIR /app
COPY . .
EXPOSE 8000
RUN npm install -f
CMD ["npm","run","start"]
