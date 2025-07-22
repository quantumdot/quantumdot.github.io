<template>
    <h2 id="projects" class="section-header">Projects</h2>
    <div v-if="data.length > 0">
        <template v-for="project_data in data">
            <Project :project="project_data" />
        </template>
    </div>
</template>

<script setup lang="ts">
import Project from "./project.vue";
import { data } from '../data/projects.data.ts';
</script>
