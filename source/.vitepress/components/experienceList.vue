<template>
    <h2 id="experience" class="section-header">Professional Experience</h2>
    <div v-if="data.length > 0">
        <template v-for="exp in data">
            <experience :exp="exp" />
        </template>
    </div>
</template>

<script setup lang="ts">
import experience from "./experience.vue";
import { data } from '../data/experience.data.ts';
</script>
