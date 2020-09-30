const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) => {
    User.find()
        .populate('createdProjects')
        .populate('projectInvolved')
        .exec((err,user) => {
            if(err){
                console.log(err);
            }
            else{
                res.json(user);
            }
        });
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const skills = req.body.skills;
    const createdProjects = req.body.createdProjects;
    const projectInvolved = req.body.projectInvolved;


    const newUser = new User({
        username,
        password,
        email,
        skills,
        createdProjects,
        projectInvolved
    });

    newUser.save()
            .then(() => res.json('User Added'))
            .catch(err => res.status(404).json('Error'+ err));
}); 

module.exports = router;