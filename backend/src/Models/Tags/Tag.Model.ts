import mongoose, { Model, Schema } from "mongoose";
class TaskModel {
  private createModel() {
    const taskSchema = new Schema({
      name: { type: String },
    });

    return taskSchema;
  }
  public loadModel() {
    const TaskModel = mongoose.model("Tag", this.createModel());

    return TaskModel;
  }
}
export default new TaskModel().loadModel();
