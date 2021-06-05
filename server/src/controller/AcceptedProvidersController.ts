import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { AcceptedProviders } from "../entity/AcceptedProviders";

export class AcceptedProvidersController {
  private acceptedProvidersRepository = getRepository(AcceptedProviders);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.acceptedProvidersRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.acceptedProvidersRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.acceptedProvidersRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let acceptedProviderToRemove =
      await this.acceptedProvidersRepository.findOne(request.params.id);
    await this.acceptedProvidersRepository.remove(acceptedProviderToRemove);
  }
}
