import mongoose, { Model, Schema } from 'mongoose';
class TaskModel {
    private createModel() {
        const taskSchema = new Schema({
            name: { type: String },
            date: { type: String },
            tag: { type: String },
            isDone: { type: Boolean, default: false },
        });

        return taskSchema;
    }
    public loadModel() {
        const TaskModel = mongoose.model('Task', this.createModel());

        return TaskModel;
    }
}
export default new TaskModel().loadModel();
