import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Appointments } from "../entity/Appointments";

export class AppointmentsController {
  private appointmentsRepository = getRepository(Appointments);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.appointmentsRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.appointmentsRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.appointmentsRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let appointmentToRemove = await this.appointmentsRepository.findOne(
      request.params.id
    );
    await this.appointmentsRepository.remove(appointmentToRemove);
  }
}
