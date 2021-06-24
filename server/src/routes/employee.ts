import { Router } from "express";
import EmployeeController from "../controller/EmployeeController";
import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";

const router = Router();

// Get all employees
router.get(
  "/",
  [checkJwt, checkRole(["ADMIN"])],
  EmployeeController.getEmployees
);

// Create employee
router.post(
  "/",
  [checkJwt, checkRole(["ADMIN"])],
  EmployeeController.createEmployee
);

// Get specific employee
router.get(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.showEmployeeById
);

// Update specific employee
router.put(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.updateEmployee
);

// Delete specific employee
router.delete(
  "/:userId",
  [checkJwt, checkRole(["ADMIN"])],
  EmployeeController.deleteEmployee
);

// Get all appointments by employee
router.get(
  "/:userId/appointments",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.getAppointmentsByEmployee
);

// Create appointment by employee
router.post(
  "/:userId/appointments",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.createAppointmentByEmployee
);

// Get specific appointment by employee
router.get(
  "/:userId/appointments/:appointmentId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.showAppointmentByEmployee
);

// Update specific appointment by employee
router.put(
  "/:userId/appointments/:appointmentId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.updateAppointmentByEmployee
);

// Delete specific appointment by employee
router.delete(
  "/:userId/appointments/:appointmentId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.deleteAppointmentByEmployee
);

// Get all patients by employee
router.get(
  "/:userId/patients",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  EmployeeController.getPatientsByEmployee
);

export default router;
