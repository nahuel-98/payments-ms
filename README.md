# Payment Microservice

## Description

The Payment Microservice (payments-ms) is responsible for handling all payment-related operations within the e-commerce platform. It ensures secure and efficient processing of customer payments, integrating seamlessly with other microservices such as orders, auth and products.
This microservice is hybrid because it communicates with other services via NATS messaging as the transport layer and RESTful.

## Features

- **Payment Processing**: Handles the processing of payments through Stripe SDK.
- **Payment Validation**: Validates payment information and ensures transaction security.
- **Transaction History**: Provides functions to retrieve the history of transactions for auditing and customer service purposes.

## Architecture

![Image](https://github.com/user-attachments/assets/04a65ee4-d813-4c3c-9136-6914679a1aaf)

## Usage
To use this Microservice repository, follow the setup instructions provided in the README file of the Products-launcher repository.

[Products-launcher repository](https://github.com/nahuel-98/products-launcher) 


