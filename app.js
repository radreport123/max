const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const mongoConnect = require('./util/database').mongoConnect;
const getDb = require('./util/database').getDb;
const port = process.env.$PORT;


//const dataPath = path.join(__dirname, 'data', 'product.json');


/*class Car {
    constructor(Option){
    this.make = Option.make;
    }

    save() {
      const db = getDb();
      return db.collection('Car')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    }
}
*/


const app = express();





/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/chest', (req, res, next) => {
   res.sendFile(path.join(__dirname, 'chest.html'));

});


//app.post('/chest1' , (req, res , next ) =>  {
  //  product.push(req.body.title);
    //console.log(product);
//});



app.post('/shoulder' , (req, res, next) => {
  const make = req.body.title;
  const Honda = new Car (make);
  Honda
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
});*/



app.use('/' , (req, res , next ) =>  {
    res.send('<h1>hello from from node</h1>');
});



  app.listen(port, '0.0.0.0', () => {
    console.log(`App is listening on 0.0.0.0:${port}`);
  });
