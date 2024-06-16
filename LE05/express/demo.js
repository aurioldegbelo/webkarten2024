const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// declare the public folder as a static folder
app.use(express.static(path.join(__dirname, '/public')))
console.log("Directory: ", __dirname)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/map', (req, res) => {
  res.send('Map Route!')
})

app.get('/chart', (req, res) => {
  res.send('Chart Route!')
})

app.get('/impressum', (req, res) => {
  res.send('Impressum Route!')
})

app.get('/map2', (req, res) => {

    res.set('Content-Type', 'text/html')
    html_static_map_file = path.join(__dirname, '/public', 'le04.html')
    console.log(html_static_map_file)
    res.sendFile(html_static_map_file)
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})