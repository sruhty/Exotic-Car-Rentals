import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


import http from "http";

import app from "/Backend/server";

require("dotenv").config();

let server = null;

if (process.env.PLATFORM_NODE_ENV === "development") {
  server = http.createServer(app);
} else {
  console.log("This is the production environment");
  server = app;
}

const PORT = process.env.PLATFORM_PORT || 8010;
server.listen(PORT, async () => {
  try {
    console.log(`Server listening on port ${PORT}`);
  } catch (err) {
    console.log("Server init error", err);
  }
});