const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.status(200).json({ message: "Welcome to the API" });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const CONNECTION_URL =
// 	"mongodb+srv://ariwolf:ariwolf123@cluster0.r6iu2.mongodb.net/?retryWrites=true&w=majority";
