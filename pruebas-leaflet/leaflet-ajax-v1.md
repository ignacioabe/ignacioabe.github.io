---
title: "stgo pedaleable"
category: leaflet
layout: empty
---
<!--
http://calvinmetcalf.github.io/leaflet-ajax/dist/leaflet.ajax.js
var geojsonLayer = new L.GeoJSON.AJAX("geojson.json");
-->

<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>stgo pedaleable</title>

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

<script src="http://calvinmetcalf.github.io/leaflet-ajax/dist/leaflet.ajax.js"></script>

<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }

}

</style>

</head>

<body>

<div id='map'></div>

<script>


function popUp(f,l){
    var out = [];
    if (f.properties){
        for(key in f.properties){
            out.push(key+": "+f.properties[key]);
        }
        l.bindPopup(out.join("<br />"));
    }
}


var cicleteros = new L.GeoJSON.AJAX("./cicleteros.geojson",{onEachFeature:popUp});
var planMaestro = new L.GeoJSON.AJAX("./geodatos-sectra/cicl-plan-maestro.geojson",{onEachFeature:popUp});

var base_cl		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png'),
    base_os		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.map-srs3by8q/{z}/{x}/{y}.png'),
    strava		= L.tileLayer('http://gometry.strava.com/tiles/cycling/color1/{z}/{x}/{y}.png', {opacity: 0.5}),
    ciclovias	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.ul9s5rk9/{z}/{x}/{y}.png'),
    bici_talleres	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.jb3s1yvi/{z}/{x}/{y}.png'),
    bici_pub	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.1knmte29/{z}/{x}/{y}.png'),
    bici_est	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.37rjm7vi/{z}/{x}/{y}.png');


var map = L.map('map', {
    center: [-33.435, -70.635],
    zoom: 15,
    layers: [base_cl, ciclovias]
});

var baseMaps = {
    "base_clara": base_cl,
    "base_oscura": base_os
};

var overlayMaps = {
    "flujos (strava)": strava,
    "ciclovias": ciclovias,
    "talleres": bici_talleres,
    "bicicletas públicas": bici_pub,
    "estacionamientos": bici_est,
    "cicleteros": cicleteros,
    "cicl-plan maestro": planMaestro
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

</script>