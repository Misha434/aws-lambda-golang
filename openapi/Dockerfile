# Dockerfile
FROM golang:1.17

# oapi-codegenのインストール
RUN go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest

# 作業ディレクトリを設定
WORKDIR /app

# エントリーポイントをoapi-codegenに設定
ENTRYPOINT ["oapi-codegen"]
