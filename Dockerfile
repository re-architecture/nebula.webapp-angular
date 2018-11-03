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

# Show images (hides intermediate images)
#docker image ls

#Show all images (default hides intermediate images)
#docker image ls -a

#删除所有image
#docker image rm $(docker image ls -aq)

# List all running containers
# docker container ls       

# List all containers, even those not running                    
# docker container ls -a     

# 删除所有容器
# docker container rm $(docker container ls -aq)

# Create image using this directory's Dockerfile
# docker build -t nebula.webapp-angular .

# docker run -d -p 4200:80 --name nebula.webapp-angular nebula.webapp-angular

# docker login

# docker tag nebula.webapp-angular rearchitecture/nebula.webapp-angular:latest

# docker push rearchitecture/nebula.webapp-angular:latest

# docker run -d -p 4200:80 --name nebula.webapp-angular rearchitecture/nebula.webapp-angular:latest

