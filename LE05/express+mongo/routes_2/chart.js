var express = require('express');
var router = express.Router();
const path = require('path')


// define the home page route
router.get('/', function(req, res) 
{

  res.send('Chart home page');
})

module.exports = router;