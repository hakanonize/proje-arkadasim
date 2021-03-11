const router = require('express').Router();
let User = require('../models/user.model');


router.route("/").get((req,res) => {
    if(req.isAuthenticated()){
        res.send('true');
    }
    else {
        res.send('false');
    }
})

module.exports = router;