import { Router } from "express";
import PatientController from "../controller/PatientsController";
import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";

const router = Router();

// Get all patients
router.get(
  "/",
  [checkJwt, checkRole(["ADMIN"])],
  PatientController.getPatients
);

// Create patient
router.post(
  "/",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.createPatient
);

// Get specific patient
router.get(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.showPatientById
);

// Update specific patient
router.put(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.updatePatient
);

// Delete specific patient
router.delete(
  "/:userId",
  [checkJwt, checkRole(["ADMIN"])],
  PatientController.deletePatient
);

// Get all appointments by patient
router.get(
  "/:userId/appointments",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.getAppointmentsByPatient
);

// Create appointment by patient
router.post(
  "/:userId/appointments",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.createAppointmentByPatient
);

// Get specific appointment by patient
router.get(
  "/:userId/appointments/:appointmentId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.showAppointmentByPatient
);

// Update specific appointment by patient
router.put(
  "/:userId/appointments/:appointmentId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.updateAppointmentByPatient
);

// Delete specific appointment by patient
router.delete(
  "/:userId/appointments/:appointmentId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.deleteAppointmentByPatient
);

// Get all medications by patient
router.get(
  "/:userId/medications",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.getMedicationsByPatient
);

// Create medication by patient
router.post(
  "/:userId/medications",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.createMedicationByPatient
);

// Get specific medication by patient
router.get(
  "/:userId/medications/:medicationId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.showMedicationByPatient
);

// Update specific medication by patient
router.put(
  "/:userId/medications/:medicationId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.updateMedicationByPatient
);

// Delete specific medication by patient
router.delete(
  "/:userId/medications/:medicationId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.deleteMedicationByPatient
);

// Get all pharmacies by patient
router.get(
  "/:userId/pharmacies",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.getMedicationsByPatient
);

// Get specific pharmacy by patient
router.get(
  "/:userId/pharmacies/:pharmacyId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.showMedicationByPatient
);

// Delete specific pharmacy by patient
router.delete(
  "/:userId/pharmacies/:pharmacyId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PatientController.deletePharmaByPatient
);

export default router;
