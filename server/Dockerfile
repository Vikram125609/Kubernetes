# Use a lightweight Node.js image
FROM node:iron-alpine

# Set working directory
WORKDIR /app

# Copy only package files first (leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 3000

# Define the default command
CMD ["node", "server.js"]