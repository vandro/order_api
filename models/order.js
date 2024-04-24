'use strict';

const { Model } = require('sequelize');

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

  return Order;
};