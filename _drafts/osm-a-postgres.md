---
title: "Ocupando datos de OSM via POSTGRES en TILEMILL"
layout: post
---

##Descarga e instalación de software:

- Instalar la aplicación de postgres (buscar `postgres.app`)

- Instalar `osm2pgsql` (la manera más fácil es con brew)

##Procedimiento

###Postgres

Crear una base de datos:

- Abrir `psql` en el terminal o en ícono del elefante arriba a la izquierda.

Ocupar los siguientes comandos:

- `create database <nombre-db>;`
(crea la base de datos)
- `\connect <nombre-db>`
(se conecta a la base de datos)
- `create extension postgis;`
(agrega una extensión para manejar objetos espaciales)
- `\quit`
(se sale y vuelve al terminal)

###Descarga datos

- Bajar datos de OPENSTREETMAP como .osm (ocupar la exportación directa de <http://openstreetmap.org> o la opción de <http://overpass.turbo.eu> Ocupar un encuadre pequeño para las primeras pruebas.

###osm2pgsql

- Cargarlos en la base de datos ocupando `osm2pgsql`
 
- `osm2pgsql <archivo .osm> -d <nombre-db>`
 
- Debiese salir un texto aclarando que cargó los datos que termina-  en:

- `Osm2pgsql took Ns overall`

###Tilemill

- Abrir tilemill, agregar tres capas de POSTGIS con los siguientes datos:

####osm-point

- name: `osm-point`
- conection: `dbname=osm host=localhost port=5432`
- table or subquery: `planet_osm_point`
- unique key field: `osm_id`
- geometry field: `way`
- extent_ `dynamic`(o pueden ponerle el encuadre si lo saben)
- SRS: `900913`

####osm-line

- name: `osm-line`
- conection: `igual que arriba`
- table or subquery: `planet_osm_line`
- unique key field: `igual que arriba`
- geometry field: `igual que arriba`
- extent_ `igual que arriba`
- SRS: `igual que arriba`

####osm-polygon

- name: `osm-polygon`
- conection: `igual que arriba`
- table or subquery: `planet_osm_polygon`
- unique key field: `igual que arriba`
- geometry field: `igual que arriba`
- extent_ `igual que arriba`
- SRS: `igual que arriba`

- **Ahora pueden darle el estilo que quieran (si saben ocupar tilemill)**
