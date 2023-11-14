# Create role with policy
```
aws iam create-role --role-name BookMuseumLambdaRole --assume-role-policy-document file://trust-policy.json
```

# Attach managed permissions
```
aws iam attach-role-policy --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole --role-name BookMuseumLambdaRole
```

# Create lambda function
aws lambda create-function --function-name BookMuseum --zip-file fileb://deployment.zip --runtime nodejs14.x --role arn:aws:iam::`account number`:role/BookMuseumLambdaRole --handler index.handler

