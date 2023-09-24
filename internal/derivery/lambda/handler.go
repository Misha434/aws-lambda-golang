package lambda

import (
    "aws_lambda_golang/internal/usecase"
    "github.com/aws/aws-lambda-go/events"
    "net/http"
)

type Handler struct{}

func NewHandler() *Handler {
    return &Handler{}
}

func (h *Handler) HandleRequest(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
    if req.HTTPMethod == "GET" && req.Path == "/api/v1/hello" {
        message := usecase.SayHello()
        return events.APIGatewayProxyResponse{
            StatusCode: http.StatusOK,
            Body:       `{"message":"` + message + `"}`,
        }, nil
    }

    return events.APIGatewayProxyResponse{
        StatusCode: http.StatusNotFound,
        Body:       `{"message":"Not found"}`,
    }, nil
}
