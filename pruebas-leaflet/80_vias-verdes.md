---
title: "80 vias verdes"
category: leaflet
layout: page
---

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<!-- leaflet -->
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

<!-- leaflet fullscreen -->
<script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.2/Leaflet.fullscreen.min.js'></script>
<link href='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.2/leaflet.fullscreen.css' rel='stylesheet' />

</div>

<script>

var base_lejos		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.k4p2jedn/{z}/{x}/{y}.png'),
	base_cerca		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.map-shkgkvg6/{z}/{x}/{y}.png'),
    strava		= L.tileLayer('http://globalheat.strava.com/tiles/both/color1/{z}/{x}/{y}.png', {opacity: 0.5, attribution:'<a href="http://labs.strava.com/heatmap/">strava heatmap</a>'}),
    ferrovias	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.vias_verdes/{z}/{x}/{y}.png');

var map = L.map('map', {
    center: [-29.238, -71.197],
    zoom: 8,
    layers: [base_lejos, ferrovias],
    fullscreenControl: true
});

var baseMaps = {
    "base simple": base_lejos,
    "base topogr.": base_cerca
};

var overlayMaps = {
    "strava": strava,
    "vías": ferrovias

};

L.control.layers(baseMaps, overlayMaps).addTo(map);

</script>