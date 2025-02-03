import express from 'express';
import entryPoint from './routes/index.js';
import { dbConnection } from '../sequelize/dbConnection.js';

// connection to database
await dbConnection();

const app = express();

app.use('/api/v1/', entryPoint)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
