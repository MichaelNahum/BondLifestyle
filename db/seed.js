var mongoose    = require("./connection");
var seedData    = require("./seeds.json");

var Garment     = mongoose.model("Garment");

console.log('hey')
Garment.remove({}).then(function(){
  console.log('girl')
    Garment.collection.insert(seedData).then(function(){
      console.log('bye bye bye')
      process.exit();
    });
  });
