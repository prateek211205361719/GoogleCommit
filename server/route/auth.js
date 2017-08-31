
var passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google',  passport.authenticate('google', { scope: ['profile'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
          res.send('login successfully');
    });
    app.get('/login', (req, res) => {
        res.send(req.session);
    })
    app.get('/logout', (req, res) => {
        req.logout();
         res.send(req.session);
    })
}

  