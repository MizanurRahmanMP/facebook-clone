import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.js';
import userRoute from './routes/user.js';
import mongooDBConnect from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';




// nit express
const app = express();
dotenv.config();



// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser());

// init env variable
const PORT = process.env.SERVER_PORT || 5000;


// routes
app.use('/api/student', studentRoute )
app.use('/api/user', userRoute )



// Express error handler
app.use( errorHandler );



// listen server
app.listen(PORT, () => {
    mongooDBConnect();
    console.log(`server runing on port ${ PORT }`.bgGreen.black);
});