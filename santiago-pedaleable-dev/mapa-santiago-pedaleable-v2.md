---
title: "leaflet ajax v3"
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

<title>leaflet ajax v3</title>

<!-- leaflet -->

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

<!-- leaflet markercluster -->

<!--
<link rel="stylesheet" href="http://rawgit.com/Leaflet/Leaflet.markercluster/master/dist/MarkerCluster.Default.css" />
<script src="http://rawgit.com/Leaflet/Leaflet.markercluster/master/dist/leaflet.markercluster.js"></script>
-->

<!-- leaflet ajax -->

<script src="http://calvinmetcalf.github.io/leaflet-ajax/dist/leaflet.ajax.js"></script>

<!-- leaflet maki markers -->

<!--
<script src="http://rawgit.com/jseppi/Leaflet.MakiMarkers/master/Leaflet.MakiMarkers.js"></script>
-->


<style>
  body { margin:0; padding:0; }
  #map { position:absolute; top:0; bottom:0; width:100%; }

}

</style>

</head>

<body>

<div id='map'></div>

<script>

// la gran lata de este sistema es que hay que exportar tres archivos separados
// desde overpass.turbo

//estilo bicicleteros
var estiloPark = {
    radius: 4,
    fillColor: "#1c1",
    color: "#1c1",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.5
};

//estilo bicicletas públicas
var estiloRent = {
    radius: 8,
    fillColor: "#f33",
    color: "#f33",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.5
};

//estilo talleres
var estiloShop = {
    radius: 8,
    fillColor: "#459dff",
    color: "#459dff",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.5
};

//estilo ciclovías plan maestro
var estiloPm = {
    color: "#f00",
    weight: 3,
    opacity: 0.7,
    dashArray: "5, 8"
};

// var markers = new L.MarkerClusterGroup();
// markers.addLayer(new L.Marker(getRandomLatLng(map)));
// ... Add more layers ...
// map.addLayer(markers);

//layer bicicleteros
var biciPark = new L.GeoJSON.AJAX("./geodatos-osm/bici-park.geojson", {

pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
,
onEachFeature:function (feature, layer) {
layer.bindPopup(
  "<b>NOMBRE:</b> " + feature.properties.name +
  "<br><b>Capacidad:</b> " + feature.properties.capacity
  );
}
,style: estiloPark});

//layer bicicletas públicas
var biciRent = new L.GeoJSON.AJAX("./geodatos-osm/bici-rent.geojson", {

pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
,
onEachFeature:function (feature, layer) {
layer.bindPopup(
  "<b>NOMBRE:</b> " + feature.properties.name +
  "<br><b>Capacidad:</b> " + feature.properties.capacity +
  "<br><b>Operador:</b> " + feature.properties.operator
  );
}
,style: estiloRent});

//layer talleres
//me gustaría poner las direcciones pero tengo problemas con los keys compuestos
//ej addr:street=
var biciShop = new L.GeoJSON.AJAX("./geodatos-osm/bici-shop.geojson", {

pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
,
onEachFeature:function (feature, layer) {
layer.bindPopup(
  "<b>NOMBRE:</b> " + feature.properties.name
  );
}
,style: estiloShop});


// layer plan maestro sectra
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
,style: estiloPm});

//respaldo base clara
//var base_cl		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png'),
//http://otile[1234].mqcdn.com/tiles/1.0.0/osm/zoom/x/y.jpg

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
    "__bici_est": biciPark,
    "__bici_pub": biciRent,
    "__bici_shop": biciShop,
    "plan maestro sectra": planMaestro
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

</script>
