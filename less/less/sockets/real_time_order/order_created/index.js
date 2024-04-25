exports.process = async ({ data, connection_id }) => {
  console.log(`Received message from: ${connection_id}`);
  console.log(`Message: ${data}`);
};
