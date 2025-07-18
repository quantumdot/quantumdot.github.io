<template>
    <div class="experience">
        <div class="role">{{ props.exp.role }}</div>
        <div class="time">{{ props.exp.time }}</div>
        <div class="company">{{ props.exp.company }}</div>
        <div class="details">{{ props.exp.details }}</div>
        <div class="technologies" v-if="technologies">
            <span v-for="(tech, index) in technologies" :key="index" class="tech">
                {{ tech }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Experience } from '../data/experience.data';

const props = defineProps<{
    exp: Experience
}>();

const technologies = computed(() => {
    return props.exp.technologies ? props.exp.technologies.split(',').map(tech => tech.trim()) : [];
});

</script>

<style scoped>
.experience {
    margin-bottom: 2em;
}
.role {
    font-size: 16px;
    color: var(--fg-color);
    font-weight: bold;
}
.company {
    color: var(--vp-c-brand-1);
    font-size: 14px;
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

</style>