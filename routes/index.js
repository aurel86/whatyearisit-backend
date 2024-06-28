var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req, res) => {
  const date = new Date();
  const yearString = date.getFullYear().toString();
  res.json({ year: yearString() })
});



module.exports = router;
