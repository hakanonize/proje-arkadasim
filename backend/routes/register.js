const router = require('express').Router();
let User = require('../models/user.model');
const passport       = require('passport');
const LocalStrategy  = require('passport-local');

router.route('/').get((req,res) => {
    res.send('asdas');
} );

router.route('/').post((req,res) => {
    var newUser = new User({
        username: req.body.username,
        email   : req.body.email
    });

    User.register(newUser, req.body.password, function(err, kullanici){
		if(err){
            console.log(err);
            res.json('Error'+err);
        }
        else{
        passport.authenticate("local")(req,res,() => {
            res.json('User Added');
        } );

    }
	});
});

module.exports = router;