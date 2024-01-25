// En el archivo app.js
import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import roomRoutes from "./routes/room.routes.js";
import cookieParser from "cookie-parser";

export const app = express();
export const PORT = 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


app.use('/api', authRoutes);

app.use('/api', roomRoutes);