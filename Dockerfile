# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose a port for the container
EXPOSE 8000

# Define environment variable
ENV REACT_APP_API_URL=http://localhost:8080/api/

# Command to run the application
CMD ["npm", "start"]