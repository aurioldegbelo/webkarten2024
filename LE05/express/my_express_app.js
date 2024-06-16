const express = require('express')
const path = require('path')

const app = express()

const port = 3000

app.use(express.static(path.join(__dirname, '/public')))
console.log("Directory: ", __dirname)

app.get('/', (req, res) => {
  res.send('Landing Page!')
})

app.get('/map', (req, res) => {

    res.set('Content-Type', 'text/html')
    html_static_map_file = path.join(__dirname, '/public', 'le04.html')
    console.log(html_static_map_file)
    res.sendFile(html_static_map_file)


})

  app.get('/chart', (req, res) => {
    res.send('This is my chart')
  })

  app.get('/contact', (req, res) => {
    res.send('This is my contact information !')
  })
  
  app.get('/impressum', (req, res) => {
    res.send('This is my impressum !')
  })
  
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})