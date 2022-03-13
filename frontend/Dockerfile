FROM node:14.17-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json /app/package.json
RUN npm install

# add app
COPY . /app

# build app
RUN npm run build

# install nginx and move app under nginx folder
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
