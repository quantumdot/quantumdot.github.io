<template>
    <div class="education">
        <div class="institution">{{ edu.institution }}</div>
        <div class="time">{{ edu.time }}</div>
        <div class="location">{{ edu.location }}</div>

        <ol class="degrees">
            <li v-for="degree in edu.degrees" :key="degree">{{ degree }}</li>
        </ol>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Education } from '../data/education.data';

const props = defineProps<{
    edu: Education
}>();



</script>

<style scoped>
.education {
    margin-bottom: 2em;
}
.institution {
    font-size: 16px;
    color: var(--fg-color);
    font-weight: bold;
}
.location {
    color: var(--vp-c-brand-1);
    font-size: 14px;
}
.time {
    font-size: 14px;
    float: right;
    color: var(--vp-c-brand-1);
}
.degrees {
    color: var(--fg-color-body);
    font-size: 14px;
}


</style>