import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import { Employee } from "../entity/Employee";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the employee ID from previous midleware
    const id = res.locals.jwtPayload.employeeId;

    //Get employee role from the database
    const employeeRepo = getRepository(Employee);
    let employee: Employee;
    try {
      employee = await employeeRepo.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(employee.role) > -1) next();
    else res.status(401).send();
  };
};
