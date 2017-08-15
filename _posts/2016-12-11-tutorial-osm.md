---
title: "Reseña y tutorial OpenStreetMap"
layout: post
---
<!--
Temario:
- Qué es OpenStreetMap (mucho más que un mapa)
- Por qué es relevante (porque permite aplicar la filosofía open source a la información geográfica, del mismo modo que wikipedia la aplica a la información enciclopédica)
- De dónde viene la información (satélites, drones, gobierno, gps, papel, etc)
- Hacia dónde va la información (mapas, aplicaciones, subproyectos, empresas, ONGs, gobierno, etc)
- Cómo se estructura la información (claves=valores, nodos, vías, polígonos, relaciones)
- Cómo se denominan las cosas (convenciones dinámicas, wiki)
- Qué se necesita para editar (crear un usuario)
- Algunos ejemplos prácticos (mapear un monumento, un pasaje o un colegio)
- Cuáles son los límites prácticos de OSM y cómo complementarlo (carto, Qgis, javascript, etc)
-->

## ¿Qué es OpenStreetMap?

OpenStreetMap es mucho más que un plano, es una base de información geográfica abierta, que nació hace más de diez años de la mano de Steve Coast con una simple plaza y actualmente es por mucho la fuente más vasta de información sobre los elementos naturales y construídos por el hombre que conforman nuestro planeta.

Aunque existen muchos otros mapas, como *Google Maps* por nombrar uno conocido, OSM se distingue de su competencia por ser abierto. Esto implica dos cosas principalmente: **Está hecho colaborativamente** por lo que cualquier persona puede añadir elementos de su entorno bajo un sistema de reglas coherente. Como cualquier persona puede añadir información, los datos no dependen de los intereses comerciales de una empresa para ser añadidos.

Además, el ser abierto permite que **cualquiera pueda usar o reutilizar los datos** (entregando la debida atribución). Esto ha dado origen a un vasto ecosistema de subproyectos, aplicaciones y colaboraciones inesperadas. Por nombrar algunos ejemplos, usuarios de Asia pueden ayudar a dibujar las calles o pasajes de Valparaíso para facilitar la logística tras el incendio, o se pueden descargar continentes completos para utilizar o analizar *offline.*

En otras palabras, existen muchos mapas, y muchas enciclopedias, pero Openstreetmap, al igual que Wikipedia, crecieron vertiginosamente por democratizar el acceso y la creación de información.

## ¿Qué tipo de información aparece en OpenStreetMap?

Principalmente elementos naturales y antrópicos que tengan las siguientes características:
- Tener una relativa permanencia en el tiempo (Una construcción, o incluso una feria libre semanal, pero no un evento puntual).
- Ser empíricamente verificables en terreno (una ciclovía puede mapearse, sus flujos no).
- Información de uso común (prioridad de lo público por sobre lo privado).

## De dónde viene la información?

En un principio, venía solamente de voluntarios, pero gracias a la gran cantidad de información disponibles, gobiernos, empresas y ONGs han aportado con gran cantidad de datos. Los datos pueden venir de cualquier fuente libre. Esto excluye otros mapas privados, análogos o digitales cuyas licencias de uso no permitan su libre reutilización (como Google Maps, por ejemplo). Los datos pueden recolectarse con diversos medios, algunos de los cuales son: Satélites, Drones, GPS, papel, mapas preexistentes, la memoria, etc.

## ¿Cómo se estructuran los datos?

La información geográfica se puede representar como nodos (puntos), vías (polilíneas) o áreas (polígonos). Además existen relaciones, que describen elementos más complejos que son la suma (o resta) de elementos básicos.
Estos elementos geométricos se describen a través de pares **clave=valor**, en general la clave habla de la categoría y el valor del tipo específico. Algunos ejemplos simples son: `highway=motorway` (autopistas), `amenity=hospital` (hospital) o `name=Valparaíso`.

## ¿Cómo se denominan (llaman) las cosas del mundo?

A través de una convención colaborativa, que puede encontrarse en http://wiki.openstreetmap.org/wiki/Map_Features. Esta convención está en Inglés, es no es fija, existen discusiones y cambios, pero en general se mantiene estable y permite coherencia a través de todo el mundo. Los tags de nombre pueden escribirse en diversos idiomas, por ejemplo: `name=Chile`y `name:fr=Chili`.

## ¿Qué se necesita para editar?
Una cuenta de usuario y una conexión a internet.
