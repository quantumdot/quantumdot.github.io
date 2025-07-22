---
# https://vitepress.dev/reference/default-theme-home-page
layout: page

hero:
  name: "Joshua K. Thackray"
  text: "Personal Website"
  tagline: "My great project tagline"

---

<script setup>
import splash from "./.vitepress/components/splash.vue";
import educationList from "./.vitepress/components/educationList.vue";
import experienceList from "./.vitepress/components/experienceList.vue";
import projectList from "./.vitepress/components/projectList.vue"
import publicationList from "./.vitepress/components/publicationList.vue";
import honorsList from "./.vitepress/components/honorsList.vue";
</script>



<div id="main-content">
  <splash />
  <education-list />
  <experience-list />
  <project-list />
  <publication-list />
  <honors-list />
</div>

