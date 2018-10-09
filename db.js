const mongoose = require('mongoose');

const mongoDBOptions = {
  useNewUrlParser: true,
  // make DB operations fail immediately when we are not connected to MongoDB
  bufferMaxEntries: 0,
  reconnectTries: 1000000,
  reconnectInterval: 3000,
  useCreateIndex: true,
};

mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('reconnected', () => {
  console.log('Reconnected to MongoDB');
});

mongoose.connection.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

mongoose.connection.on('close', () => {
  console.log('Closed MongoDB Connection');
});

mongoose.connection.on('error', (error) => {
  console.error(`MongoDB ERROR: ${error}`);
  mongoose.connect(process.env.MONGO_URI, mongoDBOptions);
});

mongoose.connect(process.env.MONGO_URI, mongoDBOptions);

const db = mongoose.connection;

module.exports = db;
