var passport  = require('passport');
require('../passport')(passport)
let jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  passport.authenticate('jwt', (err, user) => {
    if (err || !user) {

      res.status(403).send({
        message: 'Request blocked'
      })
    } else {
      console.log(user, 'here');
      req.token = 'new token'
      req.user = user // THE user OBJECT IS ADDED TO THE req OBJECT SO THE NEXT ROUTE HANDLING METHOD/MIDDLEWARE MAY GET ACCESS TO THIS ADDED user OBJECT AND MAY USE IT
      next() // THIS CALL THE NEXT ROUTE METHOD/MIDDLEWARE
    }
  })(req, res, next)
}
