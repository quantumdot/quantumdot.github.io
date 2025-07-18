<template>
    <h2 id="honors" class="section-header">Awards and Honors</h2>
    <div v-if="data.length > 0">
        <template v-for="honor in data">
            <honor :honor="honor" />
        </template>
    </div>
</template>

<script setup lang="ts">
import Honor from "./honor.vue";
import { data } from '../data/honors.data.ts';
</script>
