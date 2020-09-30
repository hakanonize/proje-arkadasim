const express        = require('express');
const cors           = require('cors');
const mongoose       = require('mongoose');
const passport       = require('passport');
const LocalStrategy  = require('passport-local');
const User 			 = require("./models/user.model");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("express-session")({
	secret:"bu bizim gizli cumlemiz",
	resave:false,
	saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established succesfully");
});

const projectRouter    = require('./routes/projects');
const userRouter       = require('./routes/users');
const registerRouter   = require('./routes/register');
const signinRouter     = require('./routes/signin');

app.use('/projects',projectRouter);
app.use('/users',userRouter);
app.use('/register',registerRouter);
app.use('/signin',signinRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});