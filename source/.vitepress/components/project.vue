<template>
    <div class="project clearfix">
        <div class="project-image" v-if="project.image">
            <template v-if="is_video(project.image)">
                <video controls="false" autoplay="true" muted="true" loop="true" class="visualization-video">
                    <source :src="project.image" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </template>
            <template v-else>
                <img :src="project.image" class="visualization-image" />
            </template>
        </div>
        <div class="project-info">
            <div class="title">{{ project.title }}</div>
            <div class="url">
                <a :href="project.url" target="_blank">{{ project.url }}</a>
            </div>
            <div class="details">{{ project.details }}</div>
            <div class="technologies" v-if="technologies">
                <span v-for="(tech, index) in technologies" :key="index" class="tech">
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Project } from '../data/projects.data';

const props = defineProps<{
    project: Project
}>();

const technologies = computed(() => {
    return props.project.technologies ? props.project.technologies.split(',').map(tech => tech.trim()) : [];
});

function is_video(url: string): boolean {
    const videoExtensions = ['.mp4', '.webm'];
    return videoExtensions.some(ext => url.endsWith(ext));
}
</script>

<style scoped>
.project {
    margin-bottom: 2em;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.project-image {
    max-width: 200px;
    margin-bottom: 10px;
    margin-right: 20px;
}
.project-info {
    max-width: 540px;
}
.title {
    font-size: 16px;
    color: var(--fg-color);
    font-weight: bold;
}
.url a{
    color: var(--vp-c-brand-1);
    text-decoration: none;
    font-size: 12px;
}
.url a:hover {
    text-decoration: underline;
}
.time {
    font-size: 14px;
    float: right;
    color: var(--vp-c-brand-1);
}
.details {
    color: var(--fg-color-body);
    font-size: 14px;
}
.technologies {
    color: var(--fg-color-body);
    font-size: 14px;
    margin-top:10px;
}
.tech {
    display: inline-block;
    background-color: var(--vp-c-tip-soft);
    padding: 0px 8px;
    margin-right: 6px;
    margin-bottom: 6px;
    border-radius: 8px;
    font-size: 12px;
}
@media (max-width: 600px) {
    .project {
        flex-direction: column;
        align-items: center;
    }

    .project-info {
        text-align: center;
        margin-top:10px;
    }
}
</style>