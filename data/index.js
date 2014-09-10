(function (data) {
    
    var seedData = require("./seedData.js");

    data.getNoteCategories = function (next) {
        next(null, seedData.initialNotes)
    };

})(module.exports);