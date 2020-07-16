FROM node:10

WORKDIR /app
RUN yarn global add serve

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./
RUN yarn build

EXPOSE 80
CMD ["serve", "-p", "80", "-s", "build"]
