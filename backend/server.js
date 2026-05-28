import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express';
import { connectDB } from './config/db.js';
import courseRouter from './routes/courseRouter.js';
import bookingRouter from './routes/bookingRouter.js';

const app = express();
const PORT = 4000;

// Middleware
app.use(cors({
    origin: ['https://learning-management-system-q3jkc81h6.vercel.app','https://learning-management-system-dgz7-opsd0gte9.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());
app.use('/uploads', express.static('uploads'));

//DB
connectDB();

//Routes
app.use('/api/course', courseRouter);
app.use('/api/booking', bookingRouter);

// App port and listen
app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});