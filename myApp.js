let express = require('express');
let app = express();

headerPath = __dirname + "/views/index.html";
stylePath = __dirname + "/public";

app.get("/", function(req, res) {
    res.sendFile(headerPath);
});

app.use("/public", express.static(stylePath));

module.exports = app;
