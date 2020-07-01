// import orm.js into burger.js
var orm = require("../config/orm");
// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    all: function (callback) {
        orm.selectAll("burgers", function (result) {
            callback(result);
        });
    },
    create: function (newBurger, callback) {
        orm.insertOne("burgers", newBurger, function (result) {
            callback(result);
        })
    },
    update: function (updateObj, condition, callback) {
        orm.updateOne("burgers", updateObj, condition, function (results) {
            callback(result);
        })
    }
};
// Export at the end of the burger.js file.
module.exports = burger;