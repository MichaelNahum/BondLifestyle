var mongoose = require("mongoose");
var GarmentSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    tags: [String]
  }
);

mongoose.model("Garment", GarmentSchema);
mongoose.Promise = global.Promise;
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
}else{
  mongoose.connect("mongodb://localhost/bondlifestyle"); //problem might be here. stack overflow suggests replacing with mongoose.connect('mongodb://127.0.0.1:27017/test');
}
module.exports = mongoose;
