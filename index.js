const express = require("express");
const colors = require("colors");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalsRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// const CONNECTION_URL =
// 	"mongodb+srv://ariwolf:ariwolf123@cluster0.r6iu2.mongodb.net/?retryWrites=true&w=majority";
