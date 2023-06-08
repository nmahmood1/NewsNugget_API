// Modules
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';


import './db/connection.js';

import newsRouter from './routes/newsRoutes.js';
import categoryRoutes from './routes/categories.js';
// import userRouter from './routes/usersRoutes.js';
import * as path from "path";



const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT;

app.use(cors());


// GET routes
app.use('/news', newsRouter);
app.use('/categories', categoryRoutes);



app.listen(PORT || 6000, () => {
  console.log(`Running on port ${PORT}`)
});
