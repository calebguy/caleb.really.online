#!/bin/bash

docker-compose up -d
sleep 1
pnpm db:migrate
pnpm db:seed
