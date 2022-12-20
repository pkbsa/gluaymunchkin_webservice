var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");

var app = express();

app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true,
    })
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const publicDirectory = path.join(__dirname + "/css");
app.use(express.static(publicDirectory));

app.set("view engine", "ejs");

app.get("/", function (request, response) {
    response.render("index");
});

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Listening at Port " + port)
});
