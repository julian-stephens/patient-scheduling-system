import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Patients } from "../entity/Patients";

export class PatientsController {
  private patientsRepository = getRepository(Patients);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.patientsRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.patientsRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.patientsRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let patientToRemove = await this.patientsRepository.findOne(
      request.params.id
    );
    await this.patientsRepository.remove(patientToRemove);
  }
}
