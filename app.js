var express = require("express");
var path = require("path");
var routes = require("./route/routes");
var bodyParser = require("body-parser");
var app = express();

// For Body Parser and Stactic React Files Build
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// For Getting Static Build React Files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// For Cors On Server Side
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// For Setting Up Server
if (process.env.PORT) {
    server = app.listen(process.env.PORT || 5000, process.env.IP, function() {
        console.log("Server is running");
    });
} else {
    server = app.listen(5000, function() {
        console.log("Server is running");
    });
}

routes(app)

module.exports = app