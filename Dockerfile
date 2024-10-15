FROM node:20 as build

WORKDIR /faculdade

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

RUN ng build --configuration=production

FROM nginx:latest

COPY --from=build faculdade/dist/bar /usr/share/nginx/html


CMD ["nginx", "-g", "daemon off;"]