# Use official Node.js base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Expose the port from env or default 3000
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
