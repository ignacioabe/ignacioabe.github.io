---
title: "iframe elqui"
category: iframe
layout: empty
---

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

<!-- leaflet fullscreen -->
<script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.2/Leaflet.fullscreen.min.js'></script>
<link href='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-fullscreen/v0.0.2/leaflet.fullscreen.css' rel='stylesheet' />

<!-- leaflet ajax -->

<script src="http://calvinmetcalf.github.io/leaflet-ajax/dist/leaflet.ajax.js"></script>

<!-- leaflet maki markers -->

<!--
<script src="http://rawgit.com/jseppi/Leaflet.MakiMarkers/master/Leaflet.MakiMarkers.js"></script>
-->

</div>

<script>

// la gran lata de este sistema es que hay que exportar tres archivos separados
// desde overpass.turbo

//ESTILO PUNTOS Y LÍNEAS

//estilo estaciones de tren
var estiloEst = {
    radius: 8,
    fillColor: "#fff",
    color: "#f33",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.5
};

//estilo túneles
var estiloTun = {
    radius: 8,
    fillColor: "#111",
    color: "#111",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.5
};

//estilo ferrovía
var estiloFerrovia = {
    color: "#f00",
    weight: 3,
    opacity: 0.7,
//    dashArray: "5, 8"
};

// LAYERS GEOJSON

//layer estaciones
var trenEst = new L.GeoJSON.AJAX("./estaciones.geojson", {

pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
,
onEachFeature:function (feature, layer) {
layer.bindPopup(
  "<b>EST.:</b> " + feature.properties.name
  );
}
,style: estiloEst});

//layer túneles
var trenTun = new L.GeoJSON.AJAX("./tuneles.geojson", {

pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
,
onEachFeature:function (feature, layer) {
layer.bindPopup(
  "<b>TÚN.:</b> " + feature.properties.name
  );
}
,style: estiloTun});


// layer línea férrea
var trenFerrovia = new L.GeoJSON.AJAX("./lineas.geojson",{style: estiloFerrovia});

// LAYERS RASTER

var base_plana		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.k4p2jedn/{z}/{x}/{y}.png'),
    base_topo		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.map-shkgkvg6/{z}/{x}/{y}.png'),
	base_sat		= L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png',{maxZoom: 11, attribution: '<a href="http://www.mapquest.com/" target="_blank">MapQuest</a>'}),
//    http://otile1.mqcdn.com/tiles/1.0.0/sat
    strava		= L.tileLayer('http://globalheat.strava.com/tiles/both/color1/{z}/{x}/{y}.png', {opacity: 0.5, attribution:'<a href="http://labs.strava.com/heatmap/">Strava Heatmap</a>'})
    ;

// DEFINICIÓN Y CONTROLES MAPA 

var map = L.map('map', {
    center: [-29.937, -70.939],
    zoom: 10,
    layers: [base_plana, trenFerrovia ],
    scrollWheelZoom: false,
    fullscreenControl: true //conviene desactivar el scroll para que usarlo en otra página.
});

var baseMaps = {
    "base plana": base_plana,
    "base topografica": base_topo,
    "base satelital": base_sat
};

var overlayMaps = {
    "flujos (strava)": strava,
    "__ferrovía": trenFerrovia,
    "__estaciones": trenEst,
    "__túneles": trenTun
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

</script>
