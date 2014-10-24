---
title: "08 geoJson con ajax, popup manual"
category: leaflet
layout: page
---

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script src="https://rawgit.com/calvinmetcalf/leaflet-ajax/master/dist/leaflet.ajax.js"></script>

</div>

<script>

var cicleteros = new L.GeoJSON.AJAX("./cicleteros.geojson",{onEachFeature:function (feature, layer) {
layer.bindPopup(
  "<b>NOMBRE:</b> " + feature.properties.name +
  "<br><b>Capacidad:</b> " + feature.properties.capacity
  );
}
});


var planMaestro = new L.GeoJSON.AJAX("./geodatos-sectra/cicl-plan-maestro.geojson",{onEachFeature:function (feature, layer) {
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
    strava		= L.tileLayer('http://gometry.strava.com/tiles/cycling/color1/{z}/{x}/{y}.png', {opacity: 0.5});


var map = L.map('map', {
    center: [-33.435, -70.635],
    zoom: 15,
    layers: [base_cl]
});

var baseMaps = {
    "base_clara": base_cl,
    "base_oscura": base_os
};

var overlayMaps = {
    "flujos (strava)": strava,
    "cicleteros": cicleteros,
    "cicl-plan maestro": planMaestro
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

</script>