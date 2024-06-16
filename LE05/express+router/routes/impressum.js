const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('This is my impressum page - router instanz')
})

module.exports = router