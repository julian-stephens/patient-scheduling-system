import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { States } from "../entity/States";

export class StatesController {
  private statesRepository = getRepository(States);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.statesRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.statesRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.statesRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let stateToRemove = await this.statesRepository.findOne(request.params.id);
    await this.statesRepository.remove(stateToRemove);
  }
}
