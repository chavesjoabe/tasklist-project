import express from "express";
import Routes from "./Routes/Routes";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

class App {
  private server = express();
  private port = process.env.PORT || 3333;

  constructor() {
    this.middlewares();
  }
  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(Routes);
  }
  public createServer() {
    this.server.listen(this.port, () => {
      console.log("server is running in port:", this.port);
    });
  }

  public createDatabaseConnection() {
    mongoose.connect(process.env.DATABASE_URL || "");

    const db = mongoose.connection;

    db.on("open", () => {
      console.log("database connected");
    });

    db.on("error", () => {
      console.log("error on database connection");
    });
  }
}
export default new App();
