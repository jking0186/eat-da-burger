const express = require("express");
var burger = require("../models/burgers")
const router = express.Router();

router.get("/", function (req, res) {
	burger.all(function(data) {
		res.render("index", {
			burgers: data
		});
	});
});
router.get("/api/burgers",function(_,res) {
    burger.all(function(data) {
        var hbsObj = { burger: data };
        res.render(hbsObj);
    });
});
router.post("/api/burgers", function (req, res) {
    burger.create(["name"],req.body.name, function(result) {
        res.json({
            id: result.insertID
        });
    });
});
router.put("/api/burgers/:id", function (req, res) {
    burger.update({
        devoured: req.body.devoured
    }, {
        id: req.params.id
    }, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// Export Router
module.exports = router;