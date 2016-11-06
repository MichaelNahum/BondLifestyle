var mongoose    = require("./connection");
var seedData    = require("./seeds");

var Garment     = mongoose.model("Garment");

Garment.remove({}).then(function(){
    Garment.collection.insert(seedDate).then(function(){
      process.exit();
    });
  });
