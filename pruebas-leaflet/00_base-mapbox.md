---
title: 00 base mapbox.js
category: leaflet
layout: page
---

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.css' rel='stylesheet' />

</div>

<script>

L.mapbox.accessToken = 'pk.eyJ1IjoiaWduYWNpb2FiZSIsImEiOiJsTDV0dWFJIn0.Og513NMky_08_sXUUDsrbA';

var map = L.mapbox.map('map', 'ignacioabe.j74kak2h')
    .setView([-33.435, -70.635], 14);

</script>