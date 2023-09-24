import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda関数の作成
    const helloLambda = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.PROVIDED_AL2,
      handler: 'hello', // この名前は、Goバイナリの名前と一致する必要があります
      code: lambda.Code.fromAsset('../../bin'), // 'lambda' ディレクトリに Go のコードとビルドされたバイナリを置きます
    });

    // API Gatewayの作成
    const api = new apigateway.RestApi(this, 'HelloApi', {
      restApiName: 'Hello Service',
      description: 'This service serves a hello world.',
    });

    const helloResource = api.root.addResource('api').addResource('v1').addResource('hello');
    const helloIntegration = new apigateway.LambdaIntegration(helloLambda);
    helloResource.addMethod('GET', helloIntegration);  // GET method to our hello resource
  }
}

const app = new cdk.App();
new LambdaStack(app, 'LambdaStack');
