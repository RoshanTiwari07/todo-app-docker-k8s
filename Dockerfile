FROM node:20

# Install curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy the rest of your app AFTER installing dependencies
COPY . .

EXPOSE 8000

CMD ["npm", "start"]
