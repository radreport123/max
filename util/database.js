const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

let _db;


const mongoConnect = (callback) => {
  mongoclient.connect('mongodb://localhost:27017')
    .then(client => {
      console.log('connected');
      _db = client.db()
      callback(client);
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



