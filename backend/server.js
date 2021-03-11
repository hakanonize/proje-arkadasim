const express        = require('express');
const cors           = require('cors');
const mongoose       = require('mongoose');
const passport       = require('passport');
const LocalStrategy  = require('passport-local');
const cookieParser = require("cookie-parser");
const User 			 = require("./models/user.model");
const bcrypt = require('bcrypt')
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();
//END OF IMPORTS

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established succesfully");
});

// Middleware


app.use(cors({
	origin: "http://localhost:3000",
	credentials:true
}));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(require("express-session")({
	secret:"secretcode",
	resave:false,
	saveUninitialized:false
}));
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport-config")(passport);



const projectRouter    = require('./routes/projects');
const userRouter       = require('./routes/users');
const registerRouter   = require('./routes/register');
const signinRouter     = require('./routes/signin');
const getUserRouter    = require('./routes/getUser');

app.use('/projects',projectRouter);
app.use('/users',userRouter);
app.use('/register',registerRouter);
app.use('/signin',signinRouter);
app.use('/getUser',getUserRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});