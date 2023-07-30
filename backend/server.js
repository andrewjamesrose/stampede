var express = require("express");
var app = express();

const key = "key-goes-here";

var Rail = require("national-rail-darwin");
var rail = new Rail(key);

app.listen(3000, () => {
  console.log("Server running on port 3000");
  console.log("Make sure the key has been updated");
});

app.get("/depatures-simple", (req, res, next) => {
  rail.getDepartureBoard("LAN", {}, function (err, result) {
    console.log(result);
    res.json(result);
  });
});

app.get("/depatures-detailed", (req, res, next) => {
  rail.getDepartureBoardWithDetails("LAN", {}, function (err, result) {
    console.log(result);
    res.json(result);
  });
});

app.get("/service-details", (req, res, next) => {
  let serviceID = "975737LANCSTR_";
  rail.getServiceDetails(serviceID, function (err, result) {
    res.json(result);
  });
});
