/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();
const router = require('express').Router();

router.get('/', (req, res) => {
  if (req.session.count) {
    req.session.count += Number(process.env.KEY);
  } else {
    req.session.count = 1;
  }
  res.send(req.session);
  // res.send(`${JSON.stringify(req.session)}`);
});

module.exports = router;
