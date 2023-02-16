const router = require('express').Router();
const Home = require('../../views/Home');
const { User } = require('../../db/models');

router.route('/')
  .get((req, res) => {
    console.log(req.cookies.myCookie);

    const { user } = res.locals;

    User.findAll({ raw: true })
      .then((allUser) => res.renderComponent(Home, { users: allUser, authUser: user }))
      .catch((err) => res.status(500).json({ err: err.message }));
  });

module.exports = router;
