---
title: 'Research Projects'
layout: single
permalink: /projects/
author_profile: true
classes: wide
sitemap: false
---

<div class="projects-list">
  {% for project in site.data.projects %}
  <div class="project-item">
    <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image">
    <div class="project-info">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
  </div>
  {% else %}
  <p>No projects found. Check your _data/projects.yml file.</p>
  {% endfor %}
</div>

<style>
.projects-list { display: flex; flex-direction: column; gap: 20px; }
.project-item { display: flex; align-items: center; gap: 20px; }
.project-image { width: 150px; height: auto; }
.project-info { flex: 1; }
</style>
