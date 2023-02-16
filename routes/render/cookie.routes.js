const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.cookie('myCookie', '2023', {
      maxAge: 1000 * 60 * 3,
      httpOnly: true,
    });

    res.send('Add cookie!');
  });

router.route('/clear')
  .get((req, res) => {
    res.clearCookie('myCookie');

    res.send('Clear cookie!');
  });

module.exports = router;
