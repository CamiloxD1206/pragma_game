import { Router } from "express";
import { createRoom, getRoomDetails } from "../controllers/room.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();


router.post('/room', authRequired, createRoom);


router.get('/room/:roomId', authRequired, getRoomDetails);

export default router;