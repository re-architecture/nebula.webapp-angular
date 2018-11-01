#https://malcoded.com/posts/angular-docker
# FROM node:8.9-alpine
# ENV NODE_ENV production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY . .
# EXPOSE 3000
# CMD npm start

# Stage 1
FROM node:10.12.0-alpine as node
WORKDIR /usr/src/app
# copy package.json and the package.lock.json into the image.
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2
FROM nginx:1.15.5-alpine
COPY --from=node /usr/src/app/dist/webapp-angular /usr/share/nginx/html
COPY ./src/app/config/nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t nebula.webapp-angular .
#docker run -p 80:80 --name nebula.webapp-angular.container -d nebula.webapp-angular
# 删除所有容器
# docker rm $(docker ps -aq)