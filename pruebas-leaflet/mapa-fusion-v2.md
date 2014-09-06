---
title: "mapa fusión v2"
layout: empty
---
<html>

<head>

<meta charset="UTF-8">

<title>mapa fusión v2</title>

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


//El problema de este método es que no sé cómo meter dos layers, porque la variable "gejson" tiene un ámbito limitado a la función $.getJSON
$.getJSON("./geodatos-sectra/cicl-plan-maestro.geojson", function(data) {

//aquí se define el layer de ciclovías, para esto se le inyecta el geJSON de arriba con jQuery
var plan_maestro = L.geoJson(data, {
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

//aquí se definen los layers, pero no puedo meter la capa gejson...
var base_cl		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png'),
    base_os		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.map-srs3by8q/{z}/{x}/{y}.png'),
    strava		= L.tileLayer('http://gometry.strava.com/tiles/cycling/color1/{z}/{x}/{y}.png', {opacity: 0.5}),
    ciclovias	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.ul9s5rk9/{z}/{x}/{y}.png');

//inicio del mapa
var map = L.map('map', {
    center: [-33.435, -70.635],
    zoom: 15,
    layers: [base_cl, ciclovias]
});

//capas que se encienden de modo alterno
var baseMaps = {
    "base_clara": base_cl,
    "base_oscura": base_os
};

//capas que se encienden de modo recurrente
var overlayMaps = {
    "strava": strava,
    "ciclovias": ciclovias,
    "Plan maestro": plan_maestro
};

//control de capas
L.control.layers(baseMaps, overlayMaps).addTo(map);


//cierre de $.getJSON
});


</script>

</body>
