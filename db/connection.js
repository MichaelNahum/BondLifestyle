var mongoose = require("mongoose");
var GarmentSchema = new mongoose.Schema(
  {
    name: String,
    price: Number
  }
);

mongoose.model("Garment", GarmentSchema);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/bondlifestyle");
module.exports = mongoose;
