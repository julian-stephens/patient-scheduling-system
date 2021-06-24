import { Router } from "express";
import AppointmentController from "../controller/AppointmentController";
import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";

const router = Router();

// Get all appointments
router.get(
  "/",
  [checkJwt, checkRole(["ADMIN"])],
  AppointmentController.getAppointments
);

// Create appointment
router.post(
  "/",
  [checkJwt, checkRole(["ADMIN"])],
  AppointmentController.createAppointment
);

// Get specific appointment
router.get(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  AppointmentController.showAppointmentById
);

// Update specific appointment
router.put(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  AppointmentController.updateAppointment
);

// Delete specific appointment
router.delete(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  AppointmentController.deleteAppointment
);

export default router;
