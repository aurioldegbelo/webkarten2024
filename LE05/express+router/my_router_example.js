const express = require('express')
const app = express()
const path = require('path')
const port = 3000


app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  
var map_route = require('./routes/map')
var chart_route = require('./routes/chart')
var impressum_route = require('./routes/impressum')


app.use('/map', map_route)
app.use('/chart', chart_route)
app.use('/impressum', impressum_route)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// map route

/**
 
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


 * 
 */

// chart route 
/*

var express = require('express');
var router = express.Router();
var fs = require('fs');


// define the home page route
router.get('/', function(req, res) 
{

  res.send('Chart home page');
})

module.exports = router;


*/