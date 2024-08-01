import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'RESTAURENT',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Database Successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1); // Exit the process with failure
    }
};

export { dbConnection };
