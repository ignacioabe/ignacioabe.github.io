---
title: "Ocupando datos de OSM via POSTGRES en TILEMILL (en osx)"
layout: post
---

## Requerimientos

- `osm2pgsql`
- `psql`

Ambos se pueden instalar usando `brew` en macos.

## Procedimiento

### Postgres

Abrir la aplicación`postgres.app`.

En el terminal:

- `psql` abre la línea de comandos de postgres

Si no funciona, es porque no existe una base de datos en la carpeta de usuario, donde psql la busca por defecto. Se pueden hacer los pasos siguientes:

- `psql -U <username> -l` lista las bases de datos
- `psql -d postgres` abre psql con la base de datos postgres (que viene por defecto)

En postgres

- `create database <nombre-db>;` crea la base de datos.
- `\connect <nombre-db>` se conecta a la base de datos.
- `create extension postgis;` agrega una extensión para manejar objetos espaciales.
- `\quit` se sale y vuelve al terminal.

De nuevo en el terminal, para abrir la base de datos durante la sesión activa.

- `pg_ctl -D /usr/local/var/postgres start` Inicia postgres
- `pg_ctl -D /usr/local/var/postgres stop` Detiene postgres

O para dejar la base de datos siempre disponible

- `brew services start postgresql` Comienza un servicio de brew para psql.
- `brew services stop postgresql` Detiene un servicio de brew para psql.

### Descarga datos

- Bajar datos de OPENSTREETMAP como .osm (ocupar la exportación directa de <http://openstreetmap.org> o la opción de <http://overpass.turbo.eu> Ocupar un encuadre pequeño para las primeras pruebas.

### osm2pgsql

- Cargarlos en la base de datos ocupando `osm2pgsql`

- `osm2pgsql <archivo .osm> -d <nombre-db>`
(si hay algún problema agregar la opción `-H localhost`

- Debiese salir un texto aclarando que cargó los datos que termina-  en:

- `Osm2pgsql took Ns overall`

## Uso datos en QGIS

Simplemente hay que añadir una nueva capa de tipo `PostGIS`, en la lista buscar `añadir` y luego en los parámetros:

- nombre: el nombre que le queremos dar
- anfitrión (host): el ip del computador con la bd. En este caso `localhost`.
- puerto: `5432` es el puerto de postgreSQL por defecto.
- y base de datos: el mismo nombre que usamos en `create database`.

Luego se puede añadir una capa de puntos, líneas, áreas o caminos (roads) que al parecer incluye sólo a la vialidad y ferrovías principales.

<!-- ### Tilemill

- Abrir tilemill, agregar tres capas de POSTGIS con los siguientes datos:

#### osm-point

- name: `osm-point`
- conection: `dbname=osm host=localhost port=5432`
- table or subquery: `planet_osm_point`
- unique key field: `osm_id`
- geometry field: `way`
- extent_ `dynamic`(o pueden ponerle el encuadre si lo saben)
- SRS: `900913`

#### osm-line

- name: `osm-line`
- conection: `igual que arriba`
- table or subquery: `planet_osm_line`
- unique key field: `igual que arriba`
- geometry field: `igual que arriba`
- extent_ `igual que arriba`
- SRS: `igual que arriba`

#### osm-polygon

- name: `osm-polygon`
- conection: `igual que arriba`
- table or subquery: `planet_osm_polygon`
- unique key field: `igual que arriba`
- geometry field: `igual que arriba`
- extent_ `igual que arriba`
- SRS: `igual que arriba`

También es posible ocupar un subconjunto de los datos, para que sea más fácil diseñar y no tengamos que estar lidiando con objetos de miles de categorías distintas. Para esto se puede crear una "sub-consulta" en "table or subquery". Con el siguiente código, por ejemplo, dejamos solamente las calles, ferrovías y ríos a **osm-line**. Además los puentes y túneles para darles un aspecto diferenciado.

	(SELECT osm_id, way, highway, railway, waterway, tunnel, bridge   
	FROM planet_osm_line  
	WHERE highway IS NOT NULL OR  
	railway IS NOT NULL OR  
	waterway IS NOT NULL)  
	AS subquery

- Ahora pueden darle el estilo que quieran, si saben ocupar [tilemill](https://www.mapbox.com/tilemill/)) -->
