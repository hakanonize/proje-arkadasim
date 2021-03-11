const router = require('express').Router();
let User = require('../models/user.model');
const passport       = require('passport');
const LocalStrategy  = require('passport-local');
const bcrypt = require("bcrypt");

router.route('/').get((req,res) => {
    res.send('asdas');
} );

router.route('/').post((req,res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password: hashedPassword,
          });
          await newUser.save();
          res.send("User Created");
        }
      });
    });

module.exports = router;