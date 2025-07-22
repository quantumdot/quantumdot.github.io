<template>
    <h2 id="publications" class="section-header">Publications</h2>
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
</script>

<style scoped>
ol {
    list-style: decimal;
    padding-left: 1em;
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
</style>
