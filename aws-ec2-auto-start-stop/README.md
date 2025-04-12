# Create EC2 With Auto Start Stop

## Create EC2 Command via AWS CLI

- Validate Template

```sh
aws cloudformation validate-template --template-body file://ec2-instance.yaml --region ap-southeast-7
```

- Create Stack

```sh
aws cloudformation create-stack --stack-name DevEC2Stack --template-body file://ec2-instance.yaml --region ap-southeast-7 --parameters ParameterKey=KeyName,ParameterValue=aws-betterfox-dev
```

- Update Stack

```sh
aws cloudformation update-stack --stack-name DevEC2Stack --template-body file://ec2-instance.yaml --region ap-southeast-7 --parameters ParameterKey=KeyName,ParameterValue=aws-betterfox-dev
```

- Delete Stack

```sh
aws cloudformation delete-stack --stack-name DevEC2Stack --region ap-southeast-7
```

## Create EC2 With Start Stop Command via AWS CLI

- Validate Template

```sh
aws cloudformation validate-template --template-body file://ec2-with-auto-start-stop.yaml --region ap-southeast-7
```

- Create Stack

```sh
aws cloudformation create-stack --stack-name DevEC2Stack --template-body file://ec2-with-auto-start-stop.yaml --region ap-southeast-7 --parameters ParameterKey=KeyName,ParameterValue=aws-betterfox-dev ParameterKey=S3Bucket,ParameterValue=aws-blog-experiment ParameterKey=S3Key,ParameterValue=lambda_functions.zip --capabilities CAPABILITY_NAMED_IAM
```

- Update Stack

```sh
aws cloudformation update-stack --stack-name DevEC2Stack --template-body file://ec2-with-auto-start-stop.yaml --region ap-southeast-7 --parameters ParameterKey=KeyName,ParameterValue=aws-betterfox-dev ParameterKey=S3Bucket,ParameterValue=aws-blog-experiment ParameterKey=S3Key,ParameterValue=lambda_functions.zip --capabilities CAPABILITY_NAMED_IAM
```

- Delete Stack

```sh
aws cloudformation delete-stack --stack-name DevEC2Stack --region ap-southeast-7
```

## Deploy Lambda Function

- Zip Lambda to S3

```sh
zip -r lambda_functions.zip lambda_functions/
```

```sh
aws s3 cp lambda_functions.zip s3://aws-blog-experiment --region ap-southeast-7
```

```sh
aws lambda create-function \
    --function-name DevEC2StartInstance \
    --runtime nodejs18.x \
    --role LambdaExecutionRoleArn \
    --handler startInstance.handler \
    --code S3Bucket=aws-blog-experiment,S3Key=lambda_functions.zip \
    --timeout 30 \
    --memory-size 128
```