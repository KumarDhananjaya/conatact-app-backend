const express = require('express');
const dotenv = require('dotenv').config();


const app = express();

const port =  process.env.PORT || 3000;

//adding a middleware
app.use("/api/contacts", require("./routes/ContactRoutes") )

app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
});