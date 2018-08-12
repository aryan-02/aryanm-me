const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressValidator = require("express-validator");
const sassMiddleware = require('node-sass-middleware');
let app = express();

/*
let logger = function(req, res, next) {
	console.log("Logging");
	next();
}
app.use(logger);
*/

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//SASS
app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'public/sass'),
    dest: path.join(__dirname, 'public/css'),
	debug: true,
	prefix: "/css/css",
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

// Set static path
app.use(express.static(path.join(__dirname, "public")));

// Routing

app.get("/", function(req, res) {
	res.render("index", {
		title: "Home",
	})
});
app.get("/projects", function(req, res) {
	res.render("projects", {
		title: "Projects",
	})
});

app.listen(80, function(){
	console.log("Server started at port 80");
});