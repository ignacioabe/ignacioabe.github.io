---
title: "06 geoJson con ajax, popup falso"
category: leaflet
layout: page
---
En este caso el popup muestra un texto fijo `hola`, en vez de mostrar los datos del elemento.

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script src="https://rawgit.com/calvinmetcalf/leaflet-ajax/master/dist/leaflet.ajax.js"></script>

</div>

<script>

var map = L.map('map').setView([-33.435, -70.635], 14);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var geojsonLayer = new L.GeoJSON.AJAX("puntos.geojson")
.addTo(map);

geojsonLayer.bindPopup('hola').openPopup();

/*
L.geoJson(data, {
    style: function (feature) {
        return {color: feature.properties.color};
    },
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.description);
    }
}).addTo(map);
*/

</script>