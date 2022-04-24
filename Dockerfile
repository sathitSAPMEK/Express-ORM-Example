FROM node:alpine

# Create App Directory
WORKDIR /usr/src/app

# Install App Dependencies
COPY package*.json ./
RUN npm install --only=production

# Bundle app source
COPY . .

ENTRYPOINT [ "npm", "run", "start" ]