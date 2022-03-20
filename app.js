var express = require("express");
var path = require("path");
var routes = require("./route/routes")
var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

//Server Setup
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