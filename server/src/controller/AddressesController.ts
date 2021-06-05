import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Addresses } from "../entity/Addresses";

export class AddressesController {
  private addressesRepository = getRepository(Addresses);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.addressesRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.addressesRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.addressesRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let addressToRemove = await this.addressesRepository.findOne(
      request.params.id
    );
    await this.addressesRepository.remove(addressToRemove);
  }
}
