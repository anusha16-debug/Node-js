var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("employeesdb");
  var myobj = [
    
    { name: 'Clay', address: 'St Clara 21', job: 'Accountant'},
    { name: 'Bryce', address: 'DC 345', job: 'IT Manager'},
  ];
  dbo.collection("employees").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});