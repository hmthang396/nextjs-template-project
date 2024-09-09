#!/bin/bash

cd /home/project && git pull origin develop

# Build the Docker image
docker-compose build

# Run the Docker container in detached mode
docker-compose up -d

docker exec -u root project npm install
docker exec -u root project npm run build
docker-compose restart
