const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Pembuatan app express
const app = express();

// DB
const mongoose = require("mongoose");
const db = require("./config/config").mongoURI;

const Routes = require("./routes/index.js");

// // Konek MongoDB
mongoose
	// .connect(db)
	.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
	.then((res) => {
		console.log("MongoDB Connected");
	})
	.catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/", Routes);

// mendefinisikan router
const PORT = process.env.APP_PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server berjalan pada port ${PORT}`);
});
