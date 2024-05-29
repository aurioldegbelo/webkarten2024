"use strict";

// Leaflet Core: https://leafletjs.com/examples.html

var map = L.map('my_map', {
    center: [51.05, 13.75],
    zoom: 13
});

var osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'

//var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
var osmUrl = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'

var osmLayer = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib }) 
osmLayer.addTo(map)



L.marker([51.04, 13.7589]).addTo(map).bindPopup("this is a popup").openPopup();


/*
var map = L.map('my_map').setView([54.05, 13.75], 10);

// markers
//L.marker([51.04, 13.7589]).addTo(map);

//var marker = L.marker([51.04, 13.7589])
//marker.addTo(map);

// tiles
var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//var osmUrl = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'

*/

// event listener (leaflet core)
map.on('click', function(e) 
{
    //alert(e.latlng);

})


// FeatureGroup is to store editable layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
    //draw: false
});

map.addControl(drawControl);


// event listener (leaflet draw)
map.on('draw:created', function (event) 
{
    
    console.log("Creation event", event)

})

map.on('draw:edited', function (event) {

    console.log("Edit event", event)

})

map.on('draw:deleted', function (event) 
{

    console.log("Delete event", event)

})

// Leaflet Draw: https://mapss.shh.mpg.de/static/packages/leaflet-draw/docs/leaflet-draw-0.4.2.html
/*
// FeatureGroup is to store editable layers
var drawnItems = new L.FeatureGroup()
map.addLayer(drawnItems)
var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: drawnItems
    },
    //draw: false
});
map.addControl(drawControl);

// event listener (leaflet draw)
map.on('draw:created', function (event) 
{
    
    console.log("Creation event", event)

})

map.on('draw:edited', function (event) {

    console.log("Edit event", event)

})

map.on('draw:deleted', function (event) 
{

    console.log("Delete event", event)

})

*/
   /* 

// routing example
L.Routing.control({
    waypoints: [
      L.latLng(51.051956, 13.741568), // Frauenkirche
      L.latLng(51.040278, 13.731389) // HBF
    ]
  }).addTo(map);


*/

