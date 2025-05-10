---
title: 'Projects'
layout: single
permalink: /projects/
author_profile: true
classes:
sitemap: false
---
<br>
<hr>
<div class="projects-list">
  {% for project in site.data.projects %}
  <div class="project-item">
    <img src="{{ project.image }}" alt="{{ project.title }}" class="project-image" style="border-radius: 18px;">
    <div class="project-info"><!--
   --><h3 style="margin: 0; text-align: center;">{{ project.title }}</h3>
    </div>
  </div>
  <div>
    {{ project.description }}<br><br><!---
 --><b>Related papers:</b><!---
 --><ul style="list-style-type: disc; padding-left: 20px; margin-top: 0"><!---
   -->{% for paper in project.papers %}
      <li style="margin-bottom: 5px;">
        <small><i><a href="https://arxiv.org/abs/{{paper[0]}}" style="color: white; text-decoration: none;">{{paper[1]}}</a></i></small>
      </li>
      {% endfor %}
    </ul>
  </div>
  <hr>
  {% else %}
  <p>No projects found. Check your _data/projects.yml file.</p>
  {% endfor %}
</div>

<style>
.projects-list { display: flex; flex-direction: column; gap: 20px; }
.project-item { display: flex; align-items: flex-start; gap: 20px; padding: 0; margin: 0;  }
.project-image { width: 200px; height: auto; bject-fit: cover; display: block; padding: 0; margin: 0; align-self: flex-start;}
.project-info { flex: 1; justify-content: center; padding: 0; margin: 0; align-self: center;}
</style>
