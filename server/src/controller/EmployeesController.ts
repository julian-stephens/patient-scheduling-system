import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Doctors } from "../entity/Doctors";

export class DoctorsController {
  private doctorsRepository = getRepository(Doctors);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.doctorsRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.doctorsRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.doctorsRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let doctorToRemove = await this.doctorsRepository.findOne(
      request.params.id
    );
    await this.doctorsRepository.remove(doctorToRemove);
  }
}
