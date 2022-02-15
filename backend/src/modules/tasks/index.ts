import express, { Request, Response } from "express";
import TaskController from "./controllers/Task.controller";

class TaskRoutes {
  constructor() {
    this.loadRoutes();
  }
  public routes = express.Router();

  private loadRoutes() {
    this.routes.get("/", TaskController.getAll);
    this.routes.get("/done", TaskController.getAllDoneTasks);
    this.routes.get("/undone", TaskController.getAllUndoneTasks);
    this.routes.post("/create", TaskController.create);
    this.routes.put("/done/:id", TaskController.toogleDoneSituation);
    this.routes.delete("/delete/:id", TaskController.deleteTask);
  }
}
export default new TaskRoutes().routes;
