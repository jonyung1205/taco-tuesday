// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var taco = {
    selectAll: function (cb) {
        orm.selectAll("tacos", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    insertOne: function (cols, vals, cb) {
        orm.insertOne("tacos", cols, vals, function (res) {
            cb(res);
        });
    },
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("tacos", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("tacos", condition, function (res) {
            cb(res);
        });
    }
};
      
// Export the database functions for the controller (tacosController.js).
module.exports = taco;

