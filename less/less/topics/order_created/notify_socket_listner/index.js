const { sockets, kvs } = require('@chuva.io/less');

exports.process = async (message) => {
  console.log(`Processing message:`, message);  
  // Get the connection_id from kvs.
  const connection_ids = await kvs.get('ORDER_CREATED_CONNECTION_IDS');

  // Publish a message to the specified connections to the `real_time_order` socket.
  if (connection_ids) {
    await sockets.real_time_order.publish(
      message,
      connection_ids
    );
  }
};
