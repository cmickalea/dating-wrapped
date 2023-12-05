import express, { json } from "express";
import colors from 'colors';
import cors from "cors";
import connectToDB from './db/conn.js';
import userRoutes from './routes/userRoutes.js';
import "dotenv/config.js";

const app = express();
const port = process.env.PORT || 4040;

// middlewares
app.use(cors());
app.use(json());
app.use(express.json())

// Connect to database
connectToDB();

// routes

app.use('/api', userRoutes)

// listen for PORT
app.listen(port, () => console.log(`server started on port ${port}...`.magenta));
