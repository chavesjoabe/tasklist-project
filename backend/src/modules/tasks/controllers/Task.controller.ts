import { Request, Response } from "express";
import TaskModel from "../../../Models/Tasks/Task.model";

class TaskController {
  public async getAll(req: Request, res: Response) {
    try {
      const tasks = await TaskModel.find().sort({ taksNumber: -1 });

      return res.json(tasks);
    } catch (error) {
      return res.json({ error });
    }
  }
  public async create(req: Request, res: Response) {
    const { name, date, tag, isDone } = req.body;

    const getLastTaskNumber = await TaskModel.find().sort({ taskNumber: -1 });

    const taskNumber = getLastTaskNumber.length
      ? getLastTaskNumber[0].taskNumber + 1
      : 1;

    try {
      const task = await TaskModel.create({
        name,
        date,
        tag,
        isDone,
        taskNumber,
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

  public async getAllDoneTasks(req: Request, res: Response) {
    const doneTasks = await TaskModel.find({ isDone: true }).sort({
      taskNumber: -1,
    });

    return res.json(doneTasks);
  }

  public async getAllUndoneTasks(req: Request, res: Response) {
    const undoneTasks = await TaskModel.find({ isDone: false }).sort({
      taskNumber: -1,
    });

    return res.json(undoneTasks);
  }
}
export default new TaskController();
