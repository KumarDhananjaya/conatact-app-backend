const express = require('express');
const { ErrorHandler } = require('./middleware/ErrorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

const port =  process.env.PORT || 3000;

//middleware to parse the data stream 
app.use(express.json());

//adding a middleware
app.use("/api/contacts", require("./routes/ContactRoutes") )

app.use(ErrorHandler);

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
});