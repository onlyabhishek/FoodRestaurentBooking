import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name must contain at least 3 characters']
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3, 'Last name must contain at least 3 characters']
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Provide a valid email']
    },
    phone: {
        type: String,
        required: true,
        minlength: [11, 'Phone number must contain exactly 11 characters'],
        maxlength: [11, 'Phone number must contain exactly 11 characters']
    },
    time: {
        type: String,  // Consider using Date if appropriate
        required: true
    },
    date: {
        type: String,  // Consider using Date if appropriate
        required: true
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
