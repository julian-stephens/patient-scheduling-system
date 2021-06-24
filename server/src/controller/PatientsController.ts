import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { validate } from "class-validator";
import { Patient } from "../entity/Patient";

class PatientController {
  static getPatients = async (req: Request, res: Response) => {
    const patientsRepo = getRepository(Patient);
    const patients = await patientsRepo.find({
      select: ["id", "name", "email", "phone", "sex"],
    });

    res.send(patients);
  };

  static createPatient = async (req: Request, res: Response) => {
    let { name, email, phone, sex } = req.body;
    let patient = new Patient();
    patient.name = name;
    patient.email = email;
    patient.phone = phone;
    patient.sex = sex;

    const errors = await validate(patient);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
  };
}
