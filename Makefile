.PHONY: build

build:
	GOOS=linux GOARCH=amd64 go build -o bin/hello cmd/main.go
