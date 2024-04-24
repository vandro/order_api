# Order API

## Description

This is a RESTful API for managing orders. It allows users to create, (read, update, and delete incoming) orders.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js (v20.9.0 or higher)
- PostgreSQL

## Installation

1. Clone the repository:

```bash
git clone https://github.com/vandro/order_api.git
cd order_api
```

2. Install dependencies:

```bash
yarn
```

## Configuration

Create a `.env` file in the project root directory and provide the following configuration:

```
DATABASE_URL=postgres://<db_username>:<db_password>@localhost:5432/order
NODE_ENV=develop
```

Replace `<db_username>` and `<db_password>` with your PostgreSQL database credentials.

## Database Setup

Run database migrations to set up the database schema:

```bash
yarn sequelize db:migrate
```

## Usage

Start the server:

```bash
yarn start
```

The server will be running at `http://localhost:3000`.

## Testing

To run tests, execute the following command:

```bash
yarn test
```

## API Documentation

### Create Order

**POST** `/orders`

Create a new order.

Request body:

```json
{
  "customer_name": "Vandro Santos",
  "amount": 150.50,
  "shipping_address": "Mindelo"
}
```

### Get Orders

**GET** `/orders`

Retrieve all orders.