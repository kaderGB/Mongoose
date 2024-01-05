import express from 'express'
import connectDB from './db/connectDB.js';
import Filmodel from './Models/Films.js'

const app = express();
const port = process.env.port || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/Films'


connectDB(DATABASE_URL);


app.listen(port, ()=> console.log(`Server is ready to go! with port ${port}`))