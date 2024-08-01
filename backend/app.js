import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { errorMiddleware } from './error/error.js';
import reservationRoute from './routes/reservationRoute.js'; // Corrected path and name

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation', reservationRoute); // Corrected route path

// Middleware to handle errors
app.use(errorMiddleware);

export default app;
