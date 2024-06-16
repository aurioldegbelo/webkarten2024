const express = require('express')
const path = require('path')
const app = express()
const port = 5000

const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017' // connection URL
const client = new MongoClient(url) // mongodb client
const dbName = 'mydb' // database name
const collectionName = 'test' // collection name

const turf = require("@turf/helpers")

var map_route = require('./routes_2/map')
var chart_route = require('./routes_2/chart')
var impressum_route = require('./routes_2/impressum')

app.use('/map', map_route)
app.use('/chart', chart_route)
app.use('/impressum', impressum_route)

app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  html_home_file = path.join(__dirname, '/public', 'home.html')
  console.log(html_home_file)
  res.sendFile(html_home_file)
})

// https://www.geeksforgeeks.org/how-to-access-post-form-fields-in-express-js/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// handling post requests, https://www.scaler.com/topics/expressjs-tutorial/handling-form-submission/
app.post('/', (req, res) => {
    console.log('receiving data ...')
    const data = JSON.parse(req.body.input_data)
    //console.log('body is ', data)

    // for a template example, see https://github.com/aurioldegbelo/geosoft2022/blob/main/lecture%2008/basic%20templates/database_template.js
    save_data_to_db(data)
    // .then(console.log)
    // .catch(console.error)
    // .finally(() => setTimeout(() => { client.close() }, 1500))

    res.send('Hello World!')

})

async function save_data_to_db(data)
{
    console.log("Saving to database...")
    console.log(data)

    await client.connect()
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    const collection = db.collection(collectionName)

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true }
    const result = await collection.insertMany(data.features, options)
    console.log(`${result.insertedCount} documents were inserted in the collection`)
}


app.get('/data', async (req, res) => {
    const result = await get_data_from_db()
    //.then(console.log)
    // .catch(console.error)
    // .finally(() => setTimeout(() => { client.close() }, 1500)) 

    const result_as_fc = turf.featureCollection(result);
    res.json(result_as_fc);
})

async function get_data_from_db()
{
    await client.connect()
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    const collection = db.collection(collectionName)

    const cursor = collection.find({})

    const results = await cursor.toArray()

    if (results.length == 0) {

        console.log("No documents found!")

    }
    else {
        console.log(`Found ${results.length} documents in the collection...`);
        //console.log(results)

    }

    return results
}


app.listen(port, () => 
{
  console.log(`Example app listening on port ${port}`)
})




// For the demo



/*


const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017' // connection URL
const client = new MongoClient(url) // mongodb client
const dbName = 'mydb' // database name
const collectionName = 'test' // collection name


const turf = require("@turf/helpers")


app.get('/data', async (req, res)=>
{
    const result = await get_data_from_db()
        //.then(console.log)
        // .catch(console.error)
        // .finally(() => setTimeout(() => { client.close() }, 1500)) 
    
        const result_as_fc = turf.featureCollection(result);
        res.json(result_as_fc);
     })
    
    // https://www.geeksforgeeks.org/how-to-access-post-form-fields-in-express-js/
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: false }));
    
    // handling post requests, https://www.scaler.com/topics/expressjs-tutorial/handling-form-submission/
    app.post('/', (req, res) => 
    {
        console.log('receiving data ...')
        const data = JSON.parse(req.body.input_data)
       // console.log('body is ', data)
       // for a template example, see https://github.com/aurioldegbelo/geosoft2022/blob/main/lecture%2008/basic%20templates/database_template.js
        save_data_to_db(data)
           // .then(console.log)
           // .catch(console.error)
           // .finally(() => setTimeout(() => { client.close() }, 1500))
    
        res.send('Hello World!')
    
    })
      


async function save_data_to_db(data)
{
    console.log("Saving to database...")
    console.log(data)

    await client.connect()
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    const collection = db.collection(collectionName)

    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true }
    const result = await collection.insertMany(data.features, options)
    console.log(`${result.insertedCount} documents were inserted in the collection`)
}

async function get_data_from_db()
{
    await client.connect()
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    const collection = db.collection(collectionName)

    const cursor = collection.find({})

    const results = await cursor.toArray()

    if (results.length == 0) {

        console.log("No documents found!")

    }
    else {
        console.log(`Found ${results.length} documents in the collection...`);
        //console.log(results)

    }

    return results
}




*/



