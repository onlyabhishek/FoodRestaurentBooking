import app from './app.js';
import { dbConnection } from './database/dbConnection.js';

const PORT = process.env.PORT || 3000;

// Connect to the database
dbConnection();

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});
