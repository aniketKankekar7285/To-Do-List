const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var item=[];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/", function(req, res) {
  var current = new Date();
  var x = current.getDay();
  var option={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day=current.toLocaleDateString("en-US",option);

  res.render("list",{kindOfDay:day,newtask:item});
})
app.post("/",function(req,res)
{
  var nextTask=req.body.task;
  item.push(nextTask);
  res.redirect("/");

})
app.listen(3000, function() {
  console.log("i am listening on port 3000");
})
