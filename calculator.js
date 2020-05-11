const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
//  console.log(request);
//  response.send("<h1>Hello World! </h1>");
//response.sendFile("index.html");
//console.log(__dirname + "/index.html");
response.sendFile(__dirname + "/index.html");
});

app.post("/", function(request, response){
//  var num1 = Number(request.body.num1);
//  var num2 = Number(request.body.num2);
//  var result = (num1*num2)/(num2*num2);
  var height = parseFloat(request.body.num1); //Height
  var weight = parseFloat(request.body.num2); //Weight
  //https://en.wikipedia.org/wiki/Body_mass_index
  //Formula: weight (lb) / [height (in)]2 x 703
  var bmi = (weight/(height*height))*703;
response.send("Naresh's BMI result = " + bmi.toFixed(2));
});

//go to brower and type localhost:3000
app.listen(3000, function(){
  console.log("server started on port 3000")
});
