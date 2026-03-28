FROM golang:1.21

WORKDIR /app

COPY . .

# Tắt module mode
RUN go env -w GO111MODULE=off

RUN go build -o app

EXPOSE 9090

CMD ["./app"]