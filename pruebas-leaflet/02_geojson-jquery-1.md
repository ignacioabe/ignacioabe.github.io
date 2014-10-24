---
title: "02 geoJson con JQuery, on-off"
category: leaflet
layout: page
---
El problema de este método es que tengo que escoger entre tener dos capas y poder modificarlas, porque la variable "geoJson" tiene un ámbito limitado a la función `$.getJSON`, por lo que no puede llamarse después. Además, el código resulta desordenado.

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>

</div>

<script>

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
    strava		= L.tileLayer('http://gometry.strava.com/tiles/cycling/color1/{z}/{x}/{y}.png', {opacity: 0.5});

//inicio del mapa
var map = L.map('map', {
    center: [-33.435, -70.635],
    zoom: 15,
    layers: [base_cl]
});

//capas que se encienden de modo alterno
var baseMaps = {
    "base_clara": base_cl,
    "base_oscura": base_os
};

//capas que se encienden de modo recurrente
var overlayMaps = {
    "strava": strava,
    "Plan maestro": plan_maestro
};

//control de capas
L.control.layers(baseMaps, overlayMaps).addTo(map);


//cierre de $.getJSON
});


</script> 