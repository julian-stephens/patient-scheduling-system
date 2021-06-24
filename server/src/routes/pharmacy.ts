import { Router } from "express";
import PharmacyController from "../controller/PharmacyController";
import { checkJwt } from "../middleware/checkJwt";
import { checkRole } from "../middleware/checkRole";

const router = Router();

// Get all pharmacies
router.get(
  "/",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PharmacyController.getPharmacys
);

// Create pharmacy
router.post(
  "/",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PharmacyController.createPharmacy
);

// Get specific pharmacy
router.get(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "PATIENT", "EMPLOYEE"])],
  PharmacyController.showPharmacyById
);

// Update specific pharmacy
router.put(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  PharmacyController.updatePharmacy
);

// Delete specific pharmacy
router.delete(
  "/:userId",
  [checkJwt, checkRole(["ADMIN", "EMPLOYEE"])],
  PharmacyController.deletePharmacy
);

export default router;
