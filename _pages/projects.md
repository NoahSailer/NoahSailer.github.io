---
title: 'Projects'
layout: single
permalink: /projects/
author_profile: true
classes: wide
sitemap: false
---

<div class="projects-list">
  {% for project in site.data.projects %}
  <div class="project-item">
    <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image" style="border: 3px solid #1A1D24; border-radius: 20px;">
    <div class="project-info">
      <h3>{{ project.title }}</h3>
      {{ project.description }}
    </div>
  </div>
  <div>
    <b>Related papers:</b><br><!---
 -->{% for paper in project.papers %}<!--
    -->• <small><i><a href="https://arxiv.org/abs/{{paper[0]}}" style="color: white; text-decoration: none">{{paper[1]}}</a></i></small><br><!--
 -->{% endfor %}
  </div>
  <hr>
  {% else %}
  <p>No projects found. Check your _data/projects.yml file.</p>
  {% endfor %}
</div>

<style>
.projects-list { display: flex; flex-direction: column; gap: 20px; }
.project-item { display: flex; align-items: flex-start; gap: 20px; }
.project-image { width: 200px; height: auto; bject-fit: cover; display: block; padding: 0; margin: 0; margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; }
.project-info { flex: 1; justify-content: flex-start; padding: 0; margin: 0; margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; line-height: 1.2; }
</style>
