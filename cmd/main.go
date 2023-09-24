package main

import (
    "context"
    "aws_lambda_golang/internal/delivery/lambda"
    "github.com/aws/aws-lambda-go/events"
    "github.com/aws/aws-lambda-go/lambda"
)

func main() {
    handler := lambda.NewHandler()
    lambda.Start(func(req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
        return handler.HandleRequest(context.TODO(), req)
    })
}
