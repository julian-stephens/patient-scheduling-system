import { Router } from "express";
import MedicationController from "../controller/MedicationController";
import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";

const router = Router();

// Get all medications
router.get(
  "/",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  MedicationController.getMedications
);

// Create medication
router.post(
  "/",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  MedicationController.createMedication
);

// Get specific medication
router.get(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  MedicationController.showMedicationById
);

// Update specific medication
router.put(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  MedicationController.updateMedication
);

// Delete specific medication
router.delete(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  MedicationController.deleteMedication
);

export default router;
