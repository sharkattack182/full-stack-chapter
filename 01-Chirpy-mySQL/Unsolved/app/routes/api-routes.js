// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get("/api/all", function(req,res) {
  var dbQuery = "SELECT * from chirps";
  connection.query(dbQuery, function(err, result) {
    if(err) throw err;
    res.json(result)
  })
})
  // Add a chirp
app.post("/api/new", function(req,res) {
  var dbQuery = "INSERT INTO chirps (author, chirp, time_created) VALUES (?,?,?)";

  connection.query(dbQuery, [req.body.author, req.body.chirp, req.body.time_created], function(err, result) {
    if(err) throw err;
    console.log("Chirp Saved");
    res.end()
  })
})

};
