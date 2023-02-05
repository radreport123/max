const mongodb = require('mongodb');
const mongoclient = mongodb.MongoClient;

let _db;


const mongoConnect = (callback) => {
  mongoclient.connect('mongodb+srv://mac41:macbookpro123@cluster0.hque2fi.mongodb.net/?retryWrites=true&w=majority')
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



