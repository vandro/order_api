const request = require('supertest');
const express = require('express');
const orderRoutes = require('../../routes/order');

// Create an Express app and use the order routes
const app = express();
app.use(express.json());
app.use('/orders', orderRoutes);

describe('createOrder', () => {
  it('should create a new order', async () => {
    // Send a POST request to the /orders endpoint
    const response = await request(app)
      .post('/orders')
      .send({
        customer_name: 'Vandro Santos',
        amount: 100.50,
        shipping_address: 'Mindelo',
      });

    // Check if the response status was set to 201 (Created)
    expect(response.status).toBe(201);

    // Check if the response body includes the created order
    expect(response.body).toEqual(expect.objectContaining({
      customer_name: 'Vandro Santos',
      amount: 100.50,
      status: 'pending',
      shipping_address: 'Mindelo',
    }));
  });

  it('should handle errors', async () => {
    // Send a POST request to the /orders endpoint
    const response = await request(app)
      .post('/orders')
      .send({});

    // Check if the response status was set to 500 (Internal Server Error)
    expect(response.status).toBe(500);

    // Check if the response body includes an error message
    expect(response.body).toEqual({ error: 'Failed to create order' });
  });
});
