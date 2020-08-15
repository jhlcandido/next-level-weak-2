import { Request, Response } from "express";

import db from "../database/connection";
import convertHourToMinutes from "../utils/convertHourToMinutes";

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const classes = await db("connections").count("* as total");

    return response.json(classes[0]);
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db("connections").insert({ user_id });

    return response.status(201).send();
  }
}
