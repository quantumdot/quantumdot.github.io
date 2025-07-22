<template>
    <h2 id="projects" class="section-header">Projects</h2>
    <div v-if="data.length > 0">
        <template v-for="project in data">
            <project :project="project" />
        </template>
    </div>
</template>

<script setup lang="ts">
import project from "./project.vue";
import { data } from '../data/projects.data.ts';
</script>
