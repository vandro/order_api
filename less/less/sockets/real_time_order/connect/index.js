// Import the Key-Value Store from Less.
const { kvs } = require('@chuva.io/less');

exports.process = async ({ connection_id }) => {
  console.log('Client connected: ' + connection_id);

  // Get the connection_id from kvs (Key-Value Store).
  let connection_ids = await kvs.get('ORDER_CREATED_CONNECTION_IDS');
  if (!connection_ids) {
    connection_ids = [connection_ids];
  } else {
    connection_ids.push(connection_id);
  }

  // Add new connection_id to the existing ones
  await kvs.set('ORDER_CREATED_CONNECTION_IDS', connection_ids);
};
