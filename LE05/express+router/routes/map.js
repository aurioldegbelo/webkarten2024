const express = require('express')
const router = express.Router()
const path = require('path')

router.use(express.static(path.join(__dirname, '/public')))

// define the home page route
router.get('/', (req, res) => {
    html_static_map_file = 'le04.html'
    console.log(html_static_map_file)
    res.sendFile(html_static_map_file, {root: "./public"})
})

module.exports = router