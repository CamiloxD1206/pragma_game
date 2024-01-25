import { Router } from "express";
import { register, profile, login, logout } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router()

router.post('/register', register, login)
router.get('/profile', authRequired, profile)
router.post('/logout', logout)

export default router;