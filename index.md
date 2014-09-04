---
title: "página de ignacio abé"
layout: nocss
is-index: "TRUE"

---
#Página de Ignacio Abé (en proceso)

{% for page in site.pages %}
  {% if page.is-index != "TRUE" %} 
<li>
    <a href=".{{ page.url }}">{{ page.title }}</a>
</li>
  {% endif %}
{% endfor %}

- [Pruebas de programación en Leaflet](leaflet/)
