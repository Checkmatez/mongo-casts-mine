const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('Connected to mongo'))
  .on('error', (error) => {
    console.warn('Warning, some error: ', error);
  });

beforeEach(() => {
  mongoose.connection.collections.users.drop();
});
