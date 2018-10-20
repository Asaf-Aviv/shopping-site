const router = require('express').Router();

router.post('/orders', (req, res) => {
  console.log(req.body);
  res.send();
});

router.use((err, req, res, next) => res.status(500).send(err));

module.exports = router;
