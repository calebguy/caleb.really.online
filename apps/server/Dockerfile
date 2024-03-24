FROM node:alpine as development
WORKDIR /usr/src/app
RUN npm install -g pnpm

COPY . .

RUN pnpm install
# RUN pnpx prisma generate

FROM development as production
COPY --from=development /usr/src/app /usr/src/app
RUN pnpm build
CMD ["pnpm", "start:prod"]
