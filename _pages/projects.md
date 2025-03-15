---
title: 'Research Projects'
layout: single
permalink: /projects/
author_profile: true
classes: wide
sitemap: false
---

<!-- Example Project Entries -->
{% assign example_projects = [
  { "title": "Galaxy Formation in SIMBA", "description": "Studying the large-scale structure of galaxies using SIMBA simulations.", "image": "/assets/images/simba_galaxy.png" },
  { "title": "Black Hole Feedback", "description": "Exploring how AGN feedback influences galaxy evolution.", "image": "/assets/images/agn_feedback.png" },
  { "title": "Star Formation in Dwarf Galaxies", "description": "Investigating star formation rates in low-mass galaxies.", "image": "/assets/images/dwarf_star_formation.png" },
  { "title": "Cosmic Web Analysis", "description": "Mapping the cosmic web to understand galaxy clustering.", "image": "/assets/images/cosmic_web.png" }
] %}

{% for example_project in example_projects %}
<div class="project-item">
  <img src="{{ example_project.image }}" alt="{{ example_project.title }}" class="project-image">
  <div class="project-info">
    <h3>{{ example_project.title }}</h3>
    <p>{{ example_project.description }}</p>
  </div>
</div>
{% endfor %}
