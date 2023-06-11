let express = require('express');
let app = express();

headerPath = __dirname + "/views/index.html";
stylePath = __dirname + "/public";

app.get("/", function(req, res) {
    res.sendFile(headerPath);
});

app.use("/public", express.static(stylePath));

app.get("/json", function (req, res) {
    res.json({"message": "Hello json"});
})

module.exports = app;
