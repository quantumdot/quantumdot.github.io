<template>
    <div class="honor">
        <div class="title">{{ honor.title }}</div>
        <div class="time">{{ honor.time }}</div>
        <div class="institution">{{ honor.institution }}</div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Honor } from '../data/honors.data';

const props = defineProps<{
    honor: Honor
}>();



</script>

<style scoped>
.honor {
    margin-bottom: 2em;
}
.title {
    font-size: 16px;
    color: var(--fg-color);
    font-weight: bold;
    
}
.institution {
    color: var(--vp-c-brand-1);
    font-size: 14px;
}
.time {
    font-size: 14px;
    float: right;
    color: var(--vp-c-brand-1);
}
@media (max-width: 600px) {
    .time {
        float: none;
    }
}
</style>