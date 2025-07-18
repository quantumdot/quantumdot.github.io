<template>
    <div class="publication">
        <div class="title">{{ pub.title }}.</div>
        <div class="authors">
            <template v-for="author, index in authors">
                <span :class="{'highlight': shouldHighlight(author)}">{{ author }}</span>
                <span v-if="index < authors.length - 1">, </span>
            </template>
            <span>. </span>
            <span v-if="pub.notes">{{ pub.notes }}</span>
        </div>
        <div class="journal">{{ pub.journal }}.</div>
        <div class="date" v-if="pub.date">{{ pub.date }}.</div>
        <div class="doi" v-if="pub.doi"><a :href="doi_link" target="_blank">{{ pub.doi }}</a>.</div>
        <div class="related" v-if="pub.related">
            <ul>
                <li v-for="related in pub.related" :key="related.doi">
                    <publication :pub="related" :highlight="highlight" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Publication } from '../data/publications.data';

const props = defineProps<{
  pub: Publication
  highlight?: string[]
}>();

const doi_link = computed(() => {
  return `https://doi.org/${props.pub.doi}`;
});

const authors = computed(() => {
  return props.pub.authors ? props.pub.authors.split(',').map(author => author.trim()) : [];
});

function shouldHighlight(author: string): boolean {
    if (!props.highlight) return false;
    author = author.replace(/\*/g, '').trim(); // Remove any asterisks used for footnotes
    return props.highlight.includes(author);
}
</script setup>


<style scoped>
.publication {
    margin-bottom: 1em;
    font-size: 14px;
}
.title {
    font-weight: bold;
    color: var(--fg-color);
}
.journal {
    display: inline-block;
    padding-right: 5px;
    color: var(--vp-c-text-3);
}
.date {
    display: inline-block;
    padding-right: 5px;
    color: var(--vp-c-text-3);
}
.doi {
    display: inline-block;
    color: var(--vp-c-text-3);
}
.doi a:hover {
    text-decoration: underline;
}

.related {
    border-left: 2px solid var(--vp-c-gray-1);
}
.related ul {
    list-style: none;
}
.related ul li {
    position: relative;
    padding-left: 30px;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: -2px;
}
.related ul li::before {
    --svg-data: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="18px" fill="currentColor"><path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.22-2.22H3a.75.75 0 010-1.5h15.94l-2.22-2.22a.75.75 0 010-1.06z" clip-rule="evenodd" /></svg>');
    content: "";
    position: absolute;
    left: -2px;
    width: 22px;
    height: 18px;
    background-color: var(--vp-c-gray-1); /* <-- SET SVG COLOR */
    mask-image: var(--svg-data);
    -webkit-mask-image: var(--svg-data);
}

.authors{
    font-size: 12px;
}
.authors .highlight {
    text-decoration: underline;
    text-decoration-style: dashed;
    font-weight: 600;
    font-size: 14px;
    color: var(--vp-c-brand-1);
}
</style>