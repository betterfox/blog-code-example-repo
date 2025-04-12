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

## Deploy Lambda Function


## Create EC2 With Start Stop Command via AWS CLI

- Validate Template

```sh
aws cloudformation validate-template --template-body file://ec2-with-auto-start-stop.yaml --region ap-southeast-7
```

- Create Stack

```sh
aws cloudformation create-stack --stack-name DevEC2Stack --template-body file://ec2-with-auto-start-stop.yaml --region ap-southeast-7 --parameters ParameterKey=KeyName,ParameterValue=aws-betterfox-dev --capabilities CAPABILITY_NAMED_IAM
```

- Update Stack

```sh
aws cloudformation update-stack --stack-name DevEC2Stack --template-body file://ec2-with-auto-start-stop.yaml --region ap-southeast-7 --parameters ParameterKey=KeyName,ParameterValue=aws-betterfox-dev --capabilities CAPABILITY_NAMED_IAM
```

- Delete Stack

```sh
aws cloudformation delete-stack --stack-name DevEC2Stack --region ap-southeast-7
```