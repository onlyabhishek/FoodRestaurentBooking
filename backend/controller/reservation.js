import ErrorHandler from "../error/error.js";
import Reservation from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return next(new ErrorHandler("All fields are required", 400));
    }

    try {
        const newReservation = new Reservation({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });

        await newReservation.save();

        res.status(201).json({
            success: true,
            message: "Reservation created successfully",
            data: newReservation
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};
