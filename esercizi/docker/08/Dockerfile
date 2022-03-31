FROM alpine

RUN apk update && apk add nodejs

COPY /app app/

WORKDIR app/

ENTRYPOINT ["node", "index.js"]

CMD [""]
