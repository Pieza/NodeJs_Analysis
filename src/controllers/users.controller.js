const express = require('express');
const router = express.Router();

const service = require('../services/user.service');

/* GET user by id */
router.get('/:id', function(req, res) {
  service.getUserComplete(req.params.id).then(user => {
    res.send(user);
  });
});

module.exports = router;
