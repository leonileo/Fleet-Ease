// index.js
// Import necessary modules
const express = require('express');
const path = require('path');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db.js')
const cors = require('cors');


// routes
const vehicleRoutes = require('./routes/vehicleRoute.js')
const uploadRoutes = require('./routes/uploadRoute.js')

// middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware.js')

// configure port and environment
const port = process.env.PORT || 5000
const ENV = process.env.NODE_ENV || "development"

// connect db and initialize app
connectDB() 
const app = express()


// cors configuration
const allowedOrigins = ['http://localhost:5173', ''];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);

// main function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api-v1/dashboard', vehicleRoutes);
app.use('/api-v1/upload', uploadRoutes);

if (process.env.NODE_ENV === "production") {
    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    const ___dirname = path.resolve()
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}

app.use(notFound);
app.use(errorHandler);


// start listening on port 5000
app.listen(port, () => {
    console.log(`Server started on port ${port}.`)
})