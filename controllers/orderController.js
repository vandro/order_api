const { Order } = require('../models');

module.exports = {
  async index (req, res){
    try {
      const orders = await Order.findAll();
  
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  },

  async store(req, res) {
    try {
      const { customer_name, amount, shipping_address } = req.body;
  
      const order = await Order.create({
        customer_name,
        amount,
        shipping_address,
        order_date: new Date(),
        status: 'pending',
      });
  
      
      res.status(201).json(order);
    } catch (error) {
      console.error('Error creating order:', error);
  
      res.status(500).json({ error: 'Failed to create order' });
    }
  }
}
