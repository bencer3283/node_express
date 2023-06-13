let result = require('dotenv').config();
if (result.error) {
  throw result.error;
}

let bodyParser = require('body-parser');

let express = require('express');
let app = express();

headerPath = __dirname + "/views/index.html";
stylePath = __dirname + "/public";

urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedParser, function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});

app.get("/", function(req, res) {
    res.sendFile(headerPath);
});

app.use("/public", express.static(stylePath));

app.get("/json", function (req, res) {
    //console.log(process.env.MESSAGE_STYLE);
    if (process.env.MESSAGE_STYLE == "uppercase") res.json({"message": "HELLO JSON"});
    else res.json({"message": "Hello json"});
})

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res, next) => {
    res.json({time: req.time});
})

app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word});
})

app.route("/name").get((req, res) => {
    res.json({name: req.query.first + " " + req.query.last});
}).post(urlencodedParser, (req, res) => {
    res.json({name: req.body.first + " " + req.body.last});
})

module.exports = app;
