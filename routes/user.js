const router = require("express").Router();
let User = require('../Model/userModel');




router.route('/add').post((req, res) => {
  
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Age = Number(req.body.Age);
    const Contact = Number(req.body.Contact);
    const newUser = new User({
      Name,
      Email,
      Age,
      Contact,
    });
  
    newUser.save()
    .then(() => res.status(200).send("added"))
    .catch(err => res.status(400).json('Error: ' + err));
  });

// router.post('/add', function (req, res) {
//   let content = req.body;
//   if (content.Name) { //just to demo
//       return res.status.code(200).json("user created");
//   }
//   return res.status(400).json('user not created');
// });



  router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(400).json('Error:' + err));
  });

  module.exports = router;

