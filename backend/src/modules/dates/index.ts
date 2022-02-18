import express from "express";
import DateController from "./controllers/Date.controller";

class DateRouter {
  public routes = express.Router();
  constructor() {
    this.loadRoutes();
  }
  private loadRoutes() {
    this.routes.get("/", DateController.getAll);
    this.routes.post("/create", DateController.createDate);
  }
}
export default new DateRouter().routes;
