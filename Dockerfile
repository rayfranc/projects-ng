FROM docker.uclv.cu/node:18-alpine
WORKDIR /app
COPY . .
CMD [ "npm", "run", "start"]
EXPOSE 4200
