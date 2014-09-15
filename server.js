var http = require('http');
var express = require('express')
var app = express();
var port = process.env.port || 1337;
var controllers = require("./controllers");

//Set Up the view engine
app.set("view engine", "vash");

//Set the public static resource folder
app.use(express.static(__dirname + "/public"));


//Map the routes
controllers.init(app);

app.get("/api/users", function (req, res) {
    res.set("Content-Type", "application/json");
    res.send({ name: "Neil", isValid: true, group: "Admin" });
});

var server = http.createServer(app)
server.listen(port);