let express = require('express');
let app = express();
require('dotenv').config;

headerPath = __dirname + "/views/index.html";
stylePath = __dirname + "/public";

app.get("/", function(req, res) {
    res.sendFile(headerPath);
});

app.use("/public", express.static(stylePath));

app.get("/json", function (req, res) {
    console.log(process.env.MESSAGE_STYLE);
    if (process.env.MESSAGE_STYLE == "uppercase") res.json({"message": "HELLO JSON"});
    else res.json({"message": "Hello json"});
})

module.exports = app;
