import { Request, Response } from 'express';
import TaskModel from '../../../Models/Tasks/Task.model';

class TaskController {
    public async getAll(req: Request, res: Response) {
        try {
            const tasks = await TaskModel.find();

            return res.json(tasks);
        } catch (error) {
            return res.json({ error });
        }
    }
    public async create(req: Request, res: Response) {
        const { name, date, tag, isDone } = req.body;

        try {
            const task = await TaskModel.create({
                name,
                date,
                tag,
                isDone,
            });

            return res.json(task);
        } catch (error) {
            return res.json({ error });
        }
    }
    public async toogleDoneSituation(req: Request, res: Response) {
        const { id } = req.params;

        const task = await TaskModel.findById(id);

        if (task) {
            if (task.isDone === false) {
                task.isDone = true;
            } else {
                task.isDone = false;
            }
        }

        task.save();

        return res.json(task);
    }
    public async deleteTask(req: Request, res: Response) {
        const { id } = req.params;

        const task = await TaskModel.findById(id);

        if (task) {
            await TaskModel.deleteOne({ _id: id });

            return res.json({ message: `task ${id} has been deleted` });
        }
    }
}
export default new TaskController();
