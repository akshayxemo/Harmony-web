const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// setting up server side rendering view engine
app.set('view engine', 'ejs')
// setting public folder accessable for all views
app.use(express.static("public"))

// other configurations
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// database connection
const dbConnect = require("./config/db.config")
dbConnect()

// routers
app.use(require('./routers/auth'));
app.use(require('./routers/sentiment'));
app.use(require('./routers/route'));

// listening code
app.listen(3000, ()=>{
    console.log(`Server is listening to port ${port}`);
});