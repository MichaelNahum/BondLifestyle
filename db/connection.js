var mongoose = require("mongoose");
var GarmentSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    tags: [String]
  }
);

mongoose.model("Garment", GarmentSchema);
mongoose.Promise = global.Promise; //problem here?
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
}else{
  mongoose.connect("mongodb://localhost/bondlifestyle");
}
module.exports = mongoose;
