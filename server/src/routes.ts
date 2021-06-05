import { PatientController } from "./controller/PatientController";
import { DoctorController } from "./controller/DoctorController";

export const Routes = [
  {
    method: "get",
    route: "/patients",
    controller: PatientController,
    action: "all",
  },
  {
    method: "get",
    route: "/patients/:id",
    controller: PatientController,
    action: "one",
  },
  {
    method: "post",
    route: "/patients",
    controller: PatientController,
    action: "save",
  },
  {
    method: "delete",
    route: "/patients/:id",
    controller: PatientController,
    action: "remove",
  },
  {
    method: "get",
    route: "/doctors",
    controller: DoctorController,
    action: "all",
  },
  {
    method: "get",
    route: "/doctors/:id",
    controller: DoctorController,
    action: "one",
  },
  {
    method: "post",
    route: "/doctors",
    controller: DoctorController,
    action: "save",
  },
  {
    method: "delete",
    route: "/doctors/:id",
    controller: DoctorController,
    action: "remove",
  },
];

