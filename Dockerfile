# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies from the package.json file
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable
ENV NODE_ENV=development

# Expose port 3000 for the container
EXPOSE 3000

# Run the "npm run dev" command when the container starts
CMD ["npm", "run", "dev"]
