## Ejecutar el sitio

- `bundle exec jekyll serve --livereload`

- `bundle exec jekyll serve --host 0.0.0.0 --livereload` para acceder desde otros computadores (o celulares) en la red local, antes hay que averiguar el IP del computador que lo sirve y poner en el navegador del cliente: `<ip-servidor>:4000`.

## Para importar nuevas imágenes

- meterlas en carpeta `assets/img/_import/`
- ejecutar `sips -s formatOptions normal -Z 1500 *.jpg`
- moverlas a la carpeta del proyecto que corresponda.
