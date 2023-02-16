/* eslint-disable max-len */
const router = require('express').Router();
const bcrypt = require('bcrypt');
const Card = require('../../views/Card');

const { User } = require('../../db/models');

router.route('/users')
  // read
  .get((req, res) => {
    User.findAll({ raw: true })
      .then((allUsers) => res.json(allUsers))
      .catch((err) => res.json({ err: err.message }));
  })
  // create
  .post(async (req, res) => {
    const { email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    if (email && password) {
      const candidate = await User.findOne({ where: { email } });

      if (candidate) {
        res.status(400).json({ message: 'Your email is already exist!', created: false });
      } else {
        User.create({ email, password: hashPassword })
          .then((newUser) => res.status(201).json({ data: newUser, html: res.renderComponent(Card, { user: newUser }, { htmlOnly: true }) }))
          .catch((err) => res.json({ err: err.message }));
      }
    }
  });

router.route('/users/:id')
  // update
  .put((req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;

    User.update({ email, password }, { where: { id }, raw: true, returning: true })
      .then(([_, [updatedUser]]) => res.json(updatedUser))
      .catch((err) => res.json({ err: err.message }));
  })
  // delete
  .delete((req, res) => {
    const { id } = req.params;

    User.destroy({ where: { id } })
      .then((deletedUser) => (deletedUser ? res.json({ deleted: true, id }) : res.status(404).json({ deleted: false, id })));
  });

module.exports = router;
