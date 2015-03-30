---
title: "iframe elqui"
category: iframe
layout: empty
---

<div id="map" style="top:0; bottom:0; width:100%; height:500px">

<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.6/mapbox.css' rel='stylesheet' />

</div>

<script>

L.mapbox.accessToken = 'pk.eyJ1IjoiaWduYWNpb2FiZSIsImEiOiJsTDV0dWFJIn0.Og513NMky_08_sXUUDsrbA';
var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    .setView([-33.432, -70.634], 15);
    
// -33.432, -70.634, 15 

// la gran lata de este sistema es que hay que exportar tres archivos separados
// desde overpass.turbo


// LAYER GEOJSON MAPOCHO

// As with any other AJAX request, this technique is subject to the Same Origin Policy:
// http://en.wikipedia.org/wiki/Same_origin_policy
// So the CSV file must be on the same domain as the Javascript, or the server
// delivering it should support CORS.
var featureLayer = L.mapbox.featureLayer()
    .loadURL('mapocho.geojson')
    .addTo(map);


</script>
