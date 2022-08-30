import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import noteRoutes from "./routes/notes.js";

//express app
const app = express();

//middleware
app.use(bodyParser.json()); //app.use(express.json()), this will allow us access to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use("/", noteRoutes);

//for deployment
app.get("/", (req, res) => res.send("NOTE APP IS RUNNING"));

//DB connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(4000, () =>
      console.log("DB is connected and express app is running on port 4000")
    );
  })
  .catch((error) => console.log(error.message));
