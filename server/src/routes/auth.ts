import { Router } from "express";
import AuthController from "../controller/AuthController";
import { checkJwt } from "../middleware/checkJwt";

const router = Router();
//Login route
router.post("/login", AuthController.login);

//Change password
router.post("/change-password", [checkJwt], AuthController.changePassword);

export default router;