---
title: "página de ignacio abé"
category: index
layout: nocss
---
<div id="contenido">

<h1>Página de Ignacio Abé (en proceso)</h1>

<h2>Noticias</h2>
<ul> {% for post in site.posts %}
  <li>{{ post.date | | date: "%Y-%m-%d"  }} // <a href="{{ post.url }}">{{ post.title }}</a></li> {% endfor %}
</ul>
<!-- Tuve que desordenar un poco los loops para que el html resultante no tuviese líneas vacías -->

<h2>Links</h2>
<ul>
<li><a href="http://twitter.com/ignacioabe">twitter</a></li>
<li><a href="http://flickr.com/photos/ign">flickr</a></li>
<li><a href="http://soundcloud.com/ignacioabe">soundcloud</a></li>
<li><a href="https://github.com/ignacioabe">github</a></li>
</ul>

<h2>Pruebas de programación en Leaflet.js</h2>
<ul>{% for page in site.pages %} {% if page.category == "leaflet" %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>{% endif %}{% endfor %}
</ul>
<!-- Aquí también desordené los loops -->

<p>El código fuente de esta página está disponible <a href="https://github.com/ignacioabe/ignacioabe.github.io">aquí</a></p>

</div>