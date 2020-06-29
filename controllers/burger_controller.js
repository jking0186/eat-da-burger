// import the following:
// Express
var express = require("express");
// burger.js
var burger = require("../models/burgers.js")

// Create the router for the app, and export the router at the end of your file.
const router = express.Router();

router.get("/", function (req, res) {
    burger.getAll(function(data) {
        res.render("index", {
            burgers: data
        })
    });
});
router.post("/api/burgers", function(req, res) {
    burger.create(req.body, function(result) {
        res.json({
            id: result.insertID
        })
    });
});
router.put("/api/burgers/:id", function(req, res) {
    burger.update({
        devoured: req.body.devoured
    },{
        id: req.body.id
    }, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Export Router
module.exports = router;