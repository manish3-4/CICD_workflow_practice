# Build stage
FROM node:22-alpine AS build

# Set working directory
WORKDIR /app

# Copy source code
COPY . .

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from dist stage to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]