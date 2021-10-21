---
layout: post
title: "Datos y mapas abiertos (open source)"
---

<!-- # Datos y mapas abiertos (open source) -->

## Teoría:

La información geoespacial y las herramientas para trabajarla han tenido una revolución en los últimos años. Algunos factores relevantes son:

- Ubicuidad de los teléfonos inteligentes equipados con GPS
- [Openstreetmap](https://www.openstreetmap.org/), un proyecto colaborativo para crear mapas editables y libres.
- Aparición de software SIG libre [QGis](https://www.qgis.org/es/site/) y fin del monopolio de ARCGIS
- Disponibilidad de geodatos, [publicados](http://datos.gob.cl/) por de agencias de gobierno (transparencia)
- Disponibilidad de geodatos (fotos y DEMS) publicados por NASA, [USGS](https://earthexplorer.usgs.gov/) y otros
- Lenguajes de programación orientados a ciencia de datos ([Python](https://www.python.org/), R, otros)
- Librerías y servicios de mapas web ([Leaflet](https://leafletjs.com/), Mapbox y otras)
- Drones

### Fases generales de un proyecto de mapas

- Obtención de la información
- Depuración y limpieza
- Análisis y visualización
- Distribución

Estas fases no son estrictamente secuenciales y generalmente se está volviendo atrás y repitiendo el ciclo.

### Algunos ejemplos personales

- [Mapa de ciclovías de Santiago](https://ignacioabe.cl/mapa-ciclovias/)
- [Mapa desarrollado para el departamento de movilidad de Santiago](https://ignacioabe.cl/mapa-pim-santiago)
- [Mapa de las ferrovías en Chile, diferenciadas por su situación](https://ignacioabe.cl/mapa-vias-verdes/)
- [Mapa para Ladera Sur](https://ignacioabe.cl/mapa-ladera-sur/ladera-sur-2.html)
- [Mapas de zonas de sacrificio ambiental para Interferencia.cl](https://ignacioabe.cl/mapa-zonas-sacrificio/)
- [Mapa del proyecto Elqui Pedaleable](https://ignacioabe.cl/mapa-elqui-pedaleable/)

### Algunas herramientas útiles y sus fortalezas

| herramienta/fase | obtención y creación | depuración | análisis y visualiz. | distribución   |
|------------------|----------------------|------------|----------------------|----------------|
| QGIS             | +++                  | +++        | +++                  | ++ (pdf)       |
| Openstreetmap    | +++                  |            |                      | +++ (osm)      |
| GPS              | +++                  |            |                      | ++ (gpx)       |
| Celular intelig. | ++                   | +          |                      | +++ (apps)     |
| Leaflet          |                      |            | +                    | +++ (web)      |
| Mapbox           | +                    | +          | +++                  | +++ (web)      |
| Open Refine      |                      | ++         | +                    |                |
| KeplerGL         |                      | +          | +++                  | ++             |
| Python + Pandas  |                      | +++        | +++                  | ++ (pdf o web) |

## Práctica

El ejercicio consiste en revisar cómo se distribuyen los distintos tipos de intersecciones viales en Santiago, y cómo se relaciona esta distribución con los atropellos. Vamos a obtener los datos de la CONASET Y Openstreetmap/Overpass, revisarlos y ordenarlos con Open Refine, y visualizarlos con KeplerGL. Si alcanza el tiempo vamos a ver cómo hacer un mapa web básico con Geojson.io y Leaflet.

### Paso 1, obtención de la información

#### Intersecciones semaforizadas

- Ir a la [wiki](https://wiki.openstreetmap.org/wiki/Main_Page) de Openstreetmap
- Ver cómo se estructura la información de OSM
- Ver cómo se etiqueta el elemento que estamos buscando, `highway=traffic_signals` en este caso.
- Ir a [Overpass.turbo](http://overpass-turbo.eu/), definir el encuadre, usar el asistente y ejecutar la consulta.
- Guardar los datos como geojson en nuestro computador, con un nombre descriptivo.

```
/*
CONSULTA:
*/
[out:json][timeout:25];
// gather results
(
  // query part for: “highway=traffic_signal”
  node["highway"="traffic_signals"]({{bbox}});
);
// print results
out body;
>;
out skel qt;
```

### Atropellos

- Ir a [CONASET](https://www.conaset.cl/) > observatorio de datos > información geoespacial.
- Ver datasets de 'siniestros tipo atropello'.
- Descargar uno en formato CSV (hoja de cálculo)
- Revisarlo brevemente en algún programa de edición de texto o tablas

### Bonus: autopistas

- highway=motorway

### Paso 2, depuración

<!-- Para esto vamos a usar una herramienta abierta llamada [Open Refine](http://openrefine.org/) creada por Google pero actualmente mantenida por un grupo independiente de voluntarios. -->

- Descargar e instalar open refine
- Abrir el CSV que descargamos de CONASET
- Revisar las columnas, arreglar las numéricas
- Arreglar las comunas repetidas (nunoa)
- Revisar algunas estadísticas básicas, como ubicación y comuna del atropello.
- Exportar un archivo arreglado y una versión filtrada con `comuna=santiago` y `ubicacion=cruce sin señalización`.

### Paso 3, visualización con KEPLER.gl

Kepler es una librería desarrollada por UBER para visualizar grandes cantidades de información usando pocos recursos (computacionales) se utiliza por ejemplo para visualizar miles de viajes simultáneos en una ciudad.

- Abrir <https://kepler.gl/demo>
- Cargar el archivo de los semáforos, el de los atropellos y el de las autopistas
- Revisar la información de atropellos como puntos
- Usar agregaciones espaciales (heamap, clusters, hexbins, etc)
- Usar filtros

## Bonus, mapa web con la casa de cada uno

Para esto vamos a usar la librería de mapas web llamada Leaflet.

- Crear un archivo HTML en algún editor de texto (recomiendo VSCode)
- Pegarle la base:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

- Seguir las instrucciones en <https://leafletjs.com/examples/quick-start/>
- Para no tener que abrir una cuenta en mapbox se pueden usar los siguientes tiles `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`
- Llegar hasta el punto en el que añade un marcador
- Buscar las coordenadas de nuestra casa en <http://geojson.io>
- Cambiar el encuadre del mapa por las de Santiago
- Cambiar las coordenadas de del marcador por las de nuestra casa

### Código terminado

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <!-- leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin="" />

    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
        integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
        crossorigin=""></script>

    <style>
        #mapid {
            height: 600px;
        }
    </style>

</head>

<body>
    <div id="mapid"></div>

    <script>
        var mymap = L.map('mapid').setView([-33.4371, -70.6376], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18,            
        }).addTo(mymap);

        var marker = L.marker([-33.4371, -70.6376]).addTo(mymap);


    </script>
</body>

</html>
```

## FIN
