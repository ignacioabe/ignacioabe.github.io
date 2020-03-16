---
title: "Ocupando las fotos satelitales de SECTRA en OPENSTREETMAP"
layout: post
categories: [foo, otro]
---

Las fotos están en <http://www.sectra.gob.cl/datos_e_informacion_espacial/gran_santiago/ortofoto_2012.html> pero es muy difícil saber cuál es la que les sirve.

Lamentablemente, aunque la SECTRA es un organismo público y supuestamente el propósito de subir las fotos a internet es que la gente las ocupe, estas vienen en un formato propietario (ECW). Por esto, es bastante complicado abrirlas.

Qgis es capaz de abrirlas, instalando el plugin ECW de GDAL. Las descargas necesarias y las explicaciones están en <http://www.kyngchaos.com/software/frameworks>

En pocas palabras:

- Hay que bajar un archivo de ERDAS para leer ECW `ERDAS ECW/JP2 SDK v5.1 (MacOSX)`

- Un plugin para que Qgis pueda ocupar el archivo anterior `ECW plugin v1.11.0-1`

Una vez que Qgis abre la foto, podemos recortar el pedazo que nos interesa, de 1 Km cuadrado aprox. Esto, porque los archivos ECW tienen muy buena compresión y al guardarlos en otro formato, como geoTIFF, el archivo se volverá muy pesado.

- menú: `RASTER > EXTRACCIÓN > CLIPPER`

Luego hay que reproyectar el archivo para que sea útil en mapas web, de la proyección en la que viene (UTM_19S) a web mercator (WGS_84).

- menú: `RASTER > PROYECCIÓN > COMBAR (REPROYECTAR)`

Una vez hecho esto, podemos agregarlas en TILEMILL como una capa. Esto está mejor explicado en <https://www.mapbox.com/tilemill/docs/guides/reprojecting-geotiff/>

Una vez que la tengamos incorporada, podemos subirla al sitio de MAPBOX con:  

- menú: `EXPORT > UPLOAD`  

Poner ojo en que la cuenta gratis tiene un tope de 50 Mb. Para que lo que subimos no sea muy pesado, algunas recomendaciones son.

- Ocupar un rango de zoom entre 17 y 19.
- Subir la foto en JPG con calidad 80%.
- Volver a recortar el encuadre si es necesario.

Cuando hayan subido la foto, necesitan ID de su capa `usuario.capa` para ponerla en el url

`http://a.tiles.mapbox.com/v3/(poner aquí su ID)/{z}/{x}/{y}.png`

Les debería quedar algo así:

`http://a.tiles.mapbox.com/v3/ignacioabe.6f765lau/{z}/{x}/{y}.png` (Zona cívica en el centro de Maipú)

Cuando estén editando en OpenStreetMap, en el editor por defecto (iD) se puede poner su foto de fondo para dibujar, que tendrá mucho mejor resolución que la foto satelital que viene por defecto (bing maps). Para esto deben ver las capas, y en `PERSONALIZADO` colocar el url que generaron recién.

#FIN!
