const router = require('express').Router();
const bcrypt = require('bcrypt');
const Auth = require('../../views/Auth');
const { User } = require('../../db/models');

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.route('/auth')
  .get(async (req, res) => {
    res.renderComponent(Auth, {});
  })
  .post(async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const candidate = await User.findOne({ where: { email }, raw: true });

      if (candidate && await bcrypt.compare(password, candidate.password)) {
        req.session.userId = candidate.id;

        res.redirect('/home');
      } else {
        res.redirect('https://elbrusboot.camp/');
      }
    } else {
      res.status(400).json({ message: 'No data' });
    }
  });

module.exports = router;
