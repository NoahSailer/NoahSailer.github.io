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
    <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image" style="border: 2px solid gray; border-radius: 20px;">
    <div class="project-info">
      <h3>{{ project.title }}</h3>
      {{ project.description }}
      <b> Relevant papers </b>
      {% for paper in project.papers %}
      <ul>
          <li>{{paper}}</li>
      </ul>
      {% endfor %}
    </div>
  </div>
  {% else %}
  <p>No projects found. Check your _data/projects.yml file.</p>
  {% endfor %}
</div>

<style>
.projects-list { display: flex; flex-direction: column; gap: 20px; }
.project-item { display: flex; align-items: center; gap: 20px; }
.project-image { width: 200px; height: auto; }
.project-info { flex: 1; }
</style>
