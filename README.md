# Instrucciones

## Ejecutar el sitio

- `bundle exec jekyll serve --livereload`

- `bundle exec jekyll serve --host 0.0.0.0 --livereload` para acceder desde otros computadores (o celulares) en la red local, antes hay que averiguar el IP del computador que lo sirve y poner en el navegador del cliente: `<ip-servidor>:4000`.

## Para importar nuevas imágenes

- meterlas en carpeta `assets/img/_import/`

- ejecutar:

- `for i in *.png; do sips -s format jpeg -s formatOptions 70 "${i}" --out "${i%png}jpg"; done` transforma PNG a JPG.

- `% find . -name '*png' -delete` borra copias en PNG

- `sips -s formatOptions normal -Z 1500 *.jpg`  Achica las imágenes a 1500 pixeles de (ancho? dimensión mayor?)

- moverlas a la carpeta del proyecto que corresponda.

## Notas

- El sitio web usa las clases de css de tailwind. Para incorporarlas a jekyll usé [esta guía](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/)