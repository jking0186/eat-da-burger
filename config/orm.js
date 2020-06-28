// Import (require) connection.js into orm.js
var connection = require("config/connection.js");

// Create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.

const orm = {
    // selectAll()
    selectAll: function(){

    },
    // insertOne()
    insertOne: function(){

    },
    // updateOne()
    updateOne: function(){

    }
};

// Export the ORM object in module.exports.
module.exports = orm;