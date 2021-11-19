const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * List
 */
exports.user_list = (req,res, next) =>{
  User.findAll({})
  .then( users => res.status(200).json(users))
  .catch(err => console.log(err))
}

/**
 * Register
 */
exports.user_register = (req, res, next) => {
  bcrypt.hash(req.body.pwd, 10, (err, hash) => {
    if(err) {
      throw err
    }
    let user = req.body;
    user.pwd = hash;
    User.create(user)
    .then( data => res.status(201).json(data))
    .catch(error => console.log(error))
  })
}

exports.user_login = (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(user => {
    if(user){
      bcrypt.compare(req.body.pwd, user.pwd, (err, result) =>{
        if(err) res.status(500).json(err)
        else{
          if(result){
            const token = jwt.sign({ email: user.email, name: user.name}, process.env.SECRET_PHRASE, { expiresIn: '24h'})
            res.status(200).json({token: token});
          }
          else{
            res.status(500).json({message: 'You fail'})
          }
        }
      })
    }
    else{
      res.status(404).json({message: 'Bad login / pwd'})
    }
  })
  .catch(err => res.status(500).json(err)) 
}