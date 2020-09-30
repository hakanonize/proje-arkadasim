const router         = require('express').Router();
const passport       = require('passport');



router.route('/').post(passport.authenticate("local",{
    successRedirect: "/search",
    failureRedirect:"/register"
}));

module.exports = router;