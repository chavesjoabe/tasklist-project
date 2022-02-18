import { Request, Response } from "express";
import DateModel from "../../../Models/Dates/Date.model";

class DateController {
  public async getAll(req: Request, res: Response) {
    const dates = await DateModel.find();
    return res.json(dates);
  }

  public async createDate(req: Request, res: Response) {
    const { name } = req.body;

    const createDate = await DateModel.create({
      name,
    });

    return res.json(createDate);
  }
}

export default new DateController();
