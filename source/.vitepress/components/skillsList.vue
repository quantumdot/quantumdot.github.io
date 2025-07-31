<template>
    <h2 id="skills" class="section-header">Technical Skills</h2>
    <div v-if="data.length > 0">
        <template v-for="skillGroup in data" :key="skillGroup.title">
            <div class="skill-group">
                <h3>{{ skillGroup.title }}</h3>
                <ul>
                    <li v-for="skill in skillGroup.skills" :key="skill">{{ skill }}</li>
                </ul>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { data } from '../data/skills.data.ts';
</script>

<style scoped>
.skill-group {
    margin-bottom: 2em;
}
h3 {
    font-size: 16px;
    color: var(--fg-color);
    font-weight: bold;
}

li {
    display: inline-block;
    background-color: var(--vp-c-tip-soft);
    padding: 0px 8px;
    margin-right: 6px;
    margin-bottom: 6px;
    border-radius: 8px;
    font-size: 12px;
}
</style>