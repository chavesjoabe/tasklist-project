import { Request, Response } from "express";
import TagModel from "../../../Models/Tags/Tag.Model";

class TagController {
  public async getAll(req: Request, res: Response) {
    const tags = await TagModel.find();

    return res.json(tags);
  }

  public async createTag(req: Request, res: Response) {
    const { name } = req.body;

    const createTag = await TagModel.create({
      name,
    });
    return res.json(createTag);
  }
}
export default new TagController();
