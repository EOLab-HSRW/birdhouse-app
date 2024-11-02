FROM node:20-alpine

# Create app directories
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/backend

WORKDIR /usr/src/app/backend

# Copy package files
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

# Copy rest of the application
COPY . .

# Create uploads directory
RUN mkdir -p uploads
# Set proper permissions for uploads directory
RUN chmod 777 uploads

EXPOSE 8080

CMD [ "npm", "start"]