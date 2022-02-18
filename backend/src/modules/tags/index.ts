import express from "express";
import TagController from "./controllers/Tag.controller";

class TagRoutes {
  public routes = express.Router();
  constructor() {
    this.loadRoutes();
  }
  private loadRoutes() {
    this.routes.get("/", TagController.getAll);
    this.routes.post("/create", TagController.createTag);
  }
}
export default new TagRoutes().routes;
