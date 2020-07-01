// Import (require) connection.js into orm.js
var connection = require("./connection");
// Create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
    // selectAll()
    selectAll: function (tableInput, callback) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        })
    },
    // insertOne()
    insertOne: function (tableInput, object, callback) {
        var query = "INSERT INTO ?? SET ?";
        connection.query(query, [tableInput, object], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // updateOne()
    updateOne: function (tableInput, updateItem, condition, callback) {
        var query = "UPDATE ?? SET ? WHERE ?";
        connection.query(query, [tableInput, updateItem, condition], function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    }
};
// Export the ORM object in module.exports.
module.exports = orm;