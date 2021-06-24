import { Router, Request, Response } from "express";
import auth from "./auth";
import patient from "./patient";
import employee from "./employee";
import appointment from "./appointment";
import medication from "./medication";
import pharmacy from "./pharmacy";

const routes = Router();

routes.use("/auth", auth);
routes.use("/users/patients", patient);
routes.use("/users/employees", employee);
routes.use("/appointments", appointment);
routes.use("/medications", medication);
routes.use("/pharmacies", pharmacy);

export default routes;
