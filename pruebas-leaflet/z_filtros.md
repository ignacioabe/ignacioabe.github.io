---
title: "z filtrando datos"
category: leaflet
layout: page
---

<div id="map" style="top:0; bottom:0; width:100%; height:400px">

<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css" />
<script src="http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js"></script>

</div>

<script>

var map = L.map('map').setView([-33.435, -70.635], 14);

L.tileLayer('http://{s}.tiles.mapbox.com/v3/ignacioabe.j74kak2h/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

var familia = [

   {
    "type": "Feature",
        "properties": {
        "nombre": "ignacio",
            "apellido": "abé",
            "marker-color": "ff0000"
    },
        "geometry": {
        "type": "Point",
            "coordinates": [-70.57901501655579, -33.43816530644986]
    }
}, {
    "type": "Feature",
        "properties": {
        "nombre": "soledad",
            "apellido": "castro",
            "marker-color": ""
    },
        "geometry": {
        "type": "Point",
            "coordinates": [-70.5907416343689, -33.43721628221969]
    }
}, {
    "type": "Feature",
        "properties": {
        "nombre": "roberto",
            "apellido": "abé"
    },
        "geometry": {
        "type": "Point",
            "coordinates": [-70.59678196907043, -33.42712554316374]
    }
}
];

//L.geoJson(familia).addTo(map);;

// L.geoJson(states, {
//     style: function(feature) {
//         switch (feature.properties.party) {
//             case 'Republican': return {color: "#ff0000"};
//             case 'Democrat':   return {color: "#0000ff"};
//         }
//     }, 
// }).addTo(map);


// //función para traspasar de marcadores a puntos
// L.geoJson(familia, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng);
//     }
// }).addTo(map);

//función para filtrar según atributos
L.geoJson(familia, {
    filter: function(feature, layer) {
        return (feature.properties.nombre == "abé");
        
    }
    
}).addTo(map);

// L.geoJson(someFeatures, {
//     filter: function(feature, layer) {
//         return feature.properties.show_on_map;
//     }
// }).addTo(map);

</script>