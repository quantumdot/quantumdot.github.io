<template>
    <h2 id="projects" class="section-header">Projects</h2>
    <div v-if="data.length > 0">
        <template v-for="project_data in data">
            <Project :project="project_data" />
        </template>
    </div>
    <div class="see-more">
        See more projects on my
        <a href="https://github.com/quantumdot">
            <span :class="`vpi-social-github link-icon`" :style="`--icon: url('https://api.iconify.design/simple-icons/github.svg');`"></span>
            <span class="link-text">GitHub Profile</span>
        </a>.
    </div>
</template>

<script setup lang="ts">
import Project from "./project.vue";
import { data } from '../data/projects.data.ts';
</script>

<style scoped>
.see-more {
    text-align: center;
    font-size: 14px;
}
.see-more a {
    color: var(--vp-c-brand-1);
    text-decoration: none;
    padding-left: 5px;
}
.see-more a:hover {
    text-decoration: underline;
}

.link-icon {
    display: inline-block;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    padding-right:10px;
}
.link-text {
    padding-left: 8px;
    vertical-align: middle;
}
</style>