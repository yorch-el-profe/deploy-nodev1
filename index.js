const express = require("express");
const app = express();

app.get("/", function (request, response) {
	response.send("Hello World");
});

app.get("/goodbye", function (request, response) {
	response.send("Good Bye");
});

app.listen(6790);
