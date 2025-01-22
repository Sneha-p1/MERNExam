// const task=require('./routes/routes')
// const cors = require('cors');
// const express = require('express');
// const app = express();
// app.use(express.json);

// const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/Demo",{

// })
// const database = mongoose.connection;

// database.on("error", (error) => {
//     console.log(error);
// });

// database.once("connected", () => {
//     console.log("Database Connected");
// });

// app.use(
//     cors({
//         origin:"http://localhost:3001"
//     })
// )

// app.use('/', task)

// // Start the server
// const PORT = 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });  




const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const task=require('./routes/routes')


app.use(
  cors({ 
    origin: "http://localhost:3003",
  })
);

app.use(express.json());

app.use("/", task);

const PORT = 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://localhost:27017/TaskManagement");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});


