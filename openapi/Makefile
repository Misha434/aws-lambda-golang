.PHONY: oapi-gen

oapi-gen:
	docker run --rm -v $(shell pwd):/app oapi-codegen:latest -package api task-app-api.yaml > ../generated/api.gen.go
