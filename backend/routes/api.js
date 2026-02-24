const express = require('express');
const router = express.Router();

router.post('/v1/inference', (req, res) => {
  const dummyResponse = {
    prediction: 50000.0,
    margin_of_error: 250.0
  };
  res.json(dummyResponse);
});

module.exports = router;