const express = require('express');
const router = express.Router();
const mainController = require('../controllers/index');
//const pj = require('../package.json');
var path = require('path');

/* GET home page. */
// router.get('/', (req, res) => {
//   res.status(200).json({ name: pj.name, version: pj.version});
// });

router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

/* Create a short URL */
router.post('/', mainController.saveUrl);

/* Get original URL */
router.get('/:code', mainController.getUrl);

module.exports = router;