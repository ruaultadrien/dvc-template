# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /frontend

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install --frozen-lockfile --production=false

# Expose port 3000 for the container
EXPOSE 3000

# Set the command to start the server
CMD [ "yarn", "start" ]
