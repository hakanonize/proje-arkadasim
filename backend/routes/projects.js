const router = require('express').Router();
let Project = require('../models/project.model');

router.route('/').get((req, res) => {
  Project.find()
    .then((projects) => res.json(projects))
    .catch((err) => res.status(404).json('Error' + err));
});

router.route('/add').post((req, res) => {
  const pname = req.body.pname;
  const shortex = req.body.shortex;
  const pdescription = req.body.pdescription;
  //const pcreator = req.currentUser;
  const pqualifications = req.body.pqualifications;

  const newProject = new Project({
    pname,
    shortex,
    pdescription,
    pqualifications,
  });

  newProject
    .save()
    .then(() => res.json('Project added'))
    .catch((err) => res.status(404).json('Error' + err));
});

module.exports = router;
