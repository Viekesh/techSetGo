import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connection from "./database/db.js";
import router from "./route/route.js";



const app = express();

app.use(express.json());

app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/", router);

// mongoose.connect(process.env.MONGO_DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() =>
//     app.listen(process.env.PORT, (req, res) => {
//         console.log(`server is running on port no. ${process.env.PORT} and connected to database`)
//     })).catch((error) => {
//         console.log(error.message);
//     })


// app.post("/create", (req, res) => {

//     console.log(post);

//     post.create({
//         title: req.body.title,
//         desc: req.body.desc,
//     }).then((doc) => console.log(doc))
//         .catch((error) => console.log(error));

// });

connection();

app.listen(process.env.PORT, function () {
    console.log(`server is runnning on port no. ${process.env.PORT}`);
});