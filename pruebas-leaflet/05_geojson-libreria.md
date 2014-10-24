---
title: "05 geoJson como librería"
category: leaflet
layout: page
---

Aquí lo que hice fue incorporar la capa de datos como un vínculo, tal como se vincula una librería javascript o un archivo css. El problema de esto es que hay que editar manualmente los archivos geoJson, agregando la definición de la variable al principio (esto los hace incompatibles).

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script src="puntos-var.geojson"></script>

</div>

<script>

var map = L.map('map').setView([-33.435, -70.635], 14);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

L.geoJson(puntos, {
    style: function (feature) {
        return {color: feature.properties.color};
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    }
}).addTo(map);

</script>