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

<script src="http://code.jquery.com/jquery-1.11.1.js"></script>

<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }

}

</style>

</head>

<body>

<div id='map'></div>

<script>


$.getJSON("./geodatos-sectra/cicl-plan-maestro.geojson", function(data) {

var geojson = L.geoJson(data, {
  onEachFeature: function (feature, layer) {
  layer.bindPopup(
    "<b>VIA:</b> " + feature.properties.VIA +
    "<br><b>Categoría:</b> " + feature.properties.CATEGORIA +
    "<br><b>Comuna:</b> " + feature.properties.COMUNA +
    "<br><b>Largo(Km):</b> " + feature.properties.LARGO_KM +
    "<br>" +
    "<br><b>Accidentados:</b> " + feature.properties.ACCIDENTAD +
    "<br><b>Fallecidos:</b> " + feature.properties.FALLECIDOS
    );
  }
});


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
    "plan maestro": geojson
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

}); //cierre de getJSON

</script>