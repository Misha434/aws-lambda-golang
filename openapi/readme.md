```
docker build -t oapi-codegen:latest .
```

```
docker run --rm -v $(pwd):/app oapi-codegen:latest -package api task-app-api.yaml > ../lambda/api/api.gen.go
```