const express = require('express');
const app = express();
const order = require('./routes/order');

app.use(express.json());

app.use('/orders', order);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
