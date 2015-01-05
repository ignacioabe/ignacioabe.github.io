---
title: "04 geoJson con JQuery, capa líneas"
category: leaflet
layout: page
---
Aquí lo que hice es agregar dos capas externas en formato geoJson, gracias a la librería jquery. El problema es que las capas no se pueden prender o apagar después, porque las variables quedan limitadas a la función que las crea (scope).


<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script src="http://code.jquery.com/jquery-1.11.1.js"></script>

</div>

<script>

var map = L.map('map').setView([-33.435, -70.635], 14);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

$.getJSON("./puntos.geojson", function(data) {
var geojson = L.geoJson(data, {
  onEachFeature: function (feature, layer) {
	layer.bindPopup("<b>NOMBRE:</b> " + feature.properties.name +  "<br><b>TIPO:</b> " + feature.properties.shop);
  }
});
geojson.addTo(map);
});

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
geojson.addTo(map);
});

</script>