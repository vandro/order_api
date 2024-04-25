// Import the Key-Value Store from Less.
const { kvs } = require('@chuva.io/less');

exports.process = async ({ connection_id }) => {
  console.log('Client disconnected: ' + connection_id);

  let connection_ids = await kvs.get('ORDER_CREATED_CONNECTION_IDS');

  // Find the index of the connection_id to delete
  const index = connection_ids.indexOf(connection_id);

  // If the connection_id exists in the array, remove it
  if (index !== -1) {
    connection_ids.splice(index, 1);
  }

  // Set the updated connection_ids back to the KVS
  await kvs.set('ORDER_CREATED_CONNECTION_IDS', connection_ids);
};
