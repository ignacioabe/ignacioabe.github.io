---
title: "selector de capas"
category: leaflet
layout: empty
---

<html>

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>selector de capas</title>

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }

}

</style>

</head>

<body>

<div id='map'></div>

<script>

var base_cl		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png'),
	base_os		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.map-srs3by8q/{z}/{x}/{y}.png'),
    strava		= L.tileLayer('http://gometry.strava.com/tiles/cycling/color1/{z}/{x}/{y}.png', {opacity: 0.5}),
    ciclovias	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.ul9s5rk9/{z}/{x}/{y}.png');

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
    "strava": strava,
    "ciclovias": ciclovias

};

L.control.layers(baseMaps, overlayMaps).addTo(map);

</script>

</body>