'use strict';

const { Model } = require('sequelize');
const axios = require('axios');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model { }

  Order.init({
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: DataTypes.STRING,
    shipping_address: DataTypes.STRING,
    order_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });

  // Define a hook to execute after an order is created
  Order.afterCreate(async (order) => {
    // Use the URL of Topic API
    const api_url = process.env.LESS_TOPIC_URL;

    try {
      // Make the POST request using axios
      await axios.post(`${api_url}/topics/order_created`, order);
    } catch (error) {
      console.error('Error:', error);
    }
  });

  return Order;
};