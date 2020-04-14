var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("employeesdb");
  dbo.collection("employees").find({}, { projection: { _id: 0, name: 1, address: 1, job: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result);
    for(let item of result){
        if(item.name === 'John'){
            console.log(item)
        }
    }
    db.close();
  });
});