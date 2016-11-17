var express       = require("express");
var parser        = require("body-parser");
var hbs           = require("express-handlebars");
var mongoose      = require("./db/connection");
var app           = express();

var Garment = mongoose.model("Garment");

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.redirect("/garments");
});

app.get("/garments/:name", function(req, res){
  Garment.findOne({name: req.params.name}).then(function(garment){
    res.render("garments-show",{
      garment: garment
    });
  });
});

app.get("/garments", function(req, res){
  Garment.find({}).then(function(garments){
    res.render("garments-index", {
      garments: garments
    });
  });
});

app.post("/garments/:name/delete", function(req, res){
  Garment.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/garments")
  });
});

app.post("/garments/:name", function(req, res){
  Garment.findOneAndUpdate({name: req.params.name}, req.body.garment, {new: true}).then(function(garment){
    res.redirect("/garments/" + garment.name);
  });
});

app.post("/garments", function(req, res){
Garment.create(req.body.garment).then(function(garment){
  res.redirect("/garments/" + garment.name);
  });
});



app.post("")

app.listen(3001, function(){
console.log("This building needs to be at least three times bigger.");
});
