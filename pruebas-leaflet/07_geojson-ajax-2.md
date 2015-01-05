---
title: "07 geoJson con ajax, popup automático"
category: leaflet
layout: page
---

Aquí una función crea un popup que muestra todos los datos para cada elemento, lo que ahorra tiempo pero da menos control sobre lo que se muestra.

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>
<script src="https://rawgit.com/calvinmetcalf/leaflet-ajax/master/dist/leaflet.ajax.js"></script>

</div>

<script>


function popUp(f,l){
    var out = [];
    if (f.properties){
        for(key in f.properties){
            out.push(key+": "+f.properties[key]);
        }
        l.bindPopup(out.join("<br />"));
    }
}


var cicleteros = new L.GeoJSON.AJAX("./cicleteros.geojson",{onEachFeature:popUp});
var planMaestro = new L.GeoJSON.AJAX("./geodatos-sectra/cicl-plan-maestro.geojson",{onEachFeature:popUp});

var base_cl		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png'),
    base_os		= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.map-srs3by8q/{z}/{x}/{y}.png'),
    strava		= L.tileLayer('http://gometry.strava.com/tiles/cycling/color1/{z}/{x}/{y}.png', {opacity: 0.5}),
    ciclovias	= L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.stgo-ciclovias/{z}/{x}/{y}.png');


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
    "cicleteros": cicleteros,
    "cicl-plan maestro": planMaestro
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

</script>