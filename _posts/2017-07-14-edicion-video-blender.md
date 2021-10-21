---
layout: post
title: "Cómo editar video 4K con Blender?"
---
Aunque en realidad está pensado para modelado y renderizado 3d, Blender es un programa bastante versátil que también sirve para editar video. Y en este aspecto es bastante capaz, aunque algo complejo.

Un problema del programa es que es inutilizable con video 4K, pero hay una solución bastante efectiva al problema, el programa puede crear versiones reducidas del material que sirven para trabajar, pero al renderizar (exportar el video final) utiliza los archivos originales.

Estas versiones reducidas se denominan proxies, y los pasos para usarlas y crearlas son los siguientes:

- En el modo de edición de video, también llamado `VSE`, al seleccionar un clip muestra un menú de opciones a la derecha.

- En aquel menú, hay que activar la opción que dice `Proxy/Timecode` y seleccionar la opción de `25%` de resolución y en `Build JPG Quality` colocar `75%`

- Luego hacer click en `Rebuild proxy and timecode indices` y el programa va a renderizar la versión liviana del video.

- Para que Blender utilice las versiones reducidas, hay que ir al visor (donde se visualiza el video) y abrir el menú (tecla `N`), ahí en la sección `View Settings`, en `proxy render size` escoger `25%`.

- Listo, así podemos hacer toda la edición sin que el programa se quede pegado y al exportar utilizará los archivos originales.
