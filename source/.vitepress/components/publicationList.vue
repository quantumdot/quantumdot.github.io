<template>
    <h2 id="publications" class="section-header">Publications</h2>
    <div class="stats">
        <div class="stat-item" v-for="(value, key) in stats" :key="key">
            <span class="stat-label">{{ key }}</span>
            <span class="stat-number">{{ value }}</span>
        </div>
    </div>
    <ol>
    <div id="pubs-in-progress" v-if="data.in_progress.length > 0">
        <h3>Upcoming Manuscripts</h3>
        <template v-for="pub in data.in_progress">
            <li>
                <publication :pub="pub" :highlight="data.highlight" />
            </li>
        </template>
    </div>
    <div id="pubs-published" v-if="data.published.length > 0">
        <h3>Published Manuscripts</h3>
        <template v-for="pub in data.published">
            <li>
                <publication :pub="pub" :highlight="data.highlight" />
            </li>
        </template>
    </div>
    </ol>
</template>

<script setup lang="ts">
import publication from "./publication.vue";
import { data } from '../data/publications.data.ts';

const stats = {
    citations: 1057,
    "h-index": 12,
    "i10-index": 14,
};
</script>

<style scoped>
ol {
    list-style: decimal;
    padding-left: 1em;
    margin-top: 50px;
}
ol li::marker {
    font-size: 14px;
    color: var(--vp-c-text-3);
}
h3 {
    text-decoration: underline;
    margin-left: -1em;
    margin-bottom: 0.5em;
    margin-top: 2em;
    color: var(--vp-c-brand-1);
}
.stats {
    float: right;
}
.stat-item {
    margin-right: 20px;
    display: inline-block;
    margin-top: 5px;
    margin-bottom: 5px;
}
.stat-label {
    display: inline-block;
    font-size: 14px;
    height: 30px;
    color: var(--fg-color);
    background-color: var(--vp-c-tip-soft);
    padding: 5px 10px;
    border-radius: 8px 0 0 8px;
}
.stat-number {
    display: inline-block;
    font-size: 14px;
    height: 30px;
    color: var(--vp-c-text-1);
    background-color: var(--vp-c-brand-3);
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 0 8px 8px 0;
    
}
</style>
