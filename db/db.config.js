module.exports = {
  useNewUrlParser: true,
  // make DB operations fail immediately when we are not connected to MongoDB
  bufferMaxEntries: 0,
  reconnectTries: 1000000,
  reconnectInterval: 3000,
  useCreateIndex: true,
};
