import express from 'express';
import { sendReservation } from '../controller/reservation.js';

const router = express.Router();

// Define the route for creating a reservation
router.post('/send', sendReservation);

export default router;
