import { PatientsController } from "./controller/PatientsController";
import { DoctorsController } from "./controller/DoctorsController";
import { AppointmentsController } from "./controller/AppointmentsController";
import { AcceptedProvidersController } from "./controller/AcceptedProvidersController";
import { AddressesController } from "./controller/AddressesController";

export const Routes = [
  {
    method: "get",
    route: "/patients",
    controller: PatientsController,
    action: "all",
  },
  {
    method: "get",
    route: "/patients/:id",
    controller: PatientsController,
    action: "one",
  },
  {
    method: "post",
    route: "/patients",
    controller: PatientsController,
    action: "save",
  },
  {
    method: "delete",
    route: "/patients/:id",
    controller: PatientsController,
    action: "remove",
  },
  {
    method: "get",
    route: "/doctors",
    controller: DoctorsController,
    action: "all",
  },
  {
    method: "get",
    route: "/doctors/:id",
    controller: DoctorsController,
    action: "one",
  },
  {
    method: "post",
    route: "/doctors",
    controller: DoctorsController,
    action: "save",
  },
  {
    method: "delete",
    route: "/doctors/:id",
    controller: DoctorsController,
    action: "remove",
  },
  {
    method: "get",
    route: "/appointments",
    controller: AppointmentsController,
    action: "all",
  },
  {
    method: "get",
    route: "/appointments/:id",
    controller: AppointmentsController,
    action: "one",
  },
  {
    method: "post",
    route: "/appointments",
    controller: AppointmentsController,
    action: "save",
  },
  {
    method: "delete",
    route: "/appointments/:id",
    controller: AppointmentsController,
    action: "remove",
  },
  {
    method: "get",
    route: "/providers",
    controller: AcceptedProvidersController,
    action: "all",
  },
  {
    method: "get",
    route: "/providers/:id",
    controller: AcceptedProvidersController,
    action: "one",
  },
  {
    method: "post",
    route: "/providers",
    controller: AcceptedProvidersController,
    action: "save",
  },
  {
    method: "delete",
    route: "/providers/:id",
    controller: AcceptedProvidersController,
    action: "remove",
  },
  {
    method: "get",
    route: "/adddresses",
    controller: AddressesController,
    action: "all",
  },
  {
    method: "get",
    route: "/adddresses/:id",
    controller: AddressesController,
    action: "one",
  },
  {
    method: "post",
    route: "/adddresses",
    controller: AddressesController,
    action: "save",
  },
  {
    method: "delete",
    route: "/adddresses/:id",
    controller: AddressesController,
    action: "remove",
  },
];
