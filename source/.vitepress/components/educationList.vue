<template>
    <h2 id="education" class="section-header">Education</h2>
    <div v-if="data.length > 0">
        <template v-for="edu in data">
            <education :edu="edu" />
        </template>
    </div>
</template>

<script setup lang="ts">
import Education from "./education.vue";
import { data } from '../data/education.data.ts';
</script>
