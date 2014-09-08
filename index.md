---
title: "página de ignacio abé"
category: index
layout: nocss
---
#Página de Ignacio Abé (en proceso)

##Noticias
<ul> {% for post in site.posts %}
  <li>{{ post.date | | date: "%Y-%m-%d"  }} // <a href="{{ post.url }}">{{ post.title }}</a></li> {% endfor %}
</ul>

##Links
- [flickr](http://flickr.com/photos/ign)
- [soundcloud](http://soundcloud.com/ignacioabe)
- [github](https://github.com/ignacioabe)

##Pruebas de programación en Leaflet.js
<ul>{% for page in site.pages %}{% if page.category == "leaflet" %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li> {% endif %} {% endfor %}
</ul>

El código fuente de esta página está disponible [aquí](https://github.com/ignacioabe/ignacioabe.github.io)