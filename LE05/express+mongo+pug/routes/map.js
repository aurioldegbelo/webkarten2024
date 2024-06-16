var express = require('express');
var router = express.Router();

const turf = require("@turf/helpers")

const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017' // connection URL
const client = new MongoClient(url) // mongodb client
const dbName = 'mydb' // database name
const collectionName = 'test' // collection name


/* GET home page. */
router.get('/', async function(req, res, next) {
  
  const result = await get_data_from_db()
      
  const result_as_fc = turf.featureCollection(result);
  
  res.render('map', { my_data: JSON.stringify(result_as_fc)});

});


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


module.exports = router;
