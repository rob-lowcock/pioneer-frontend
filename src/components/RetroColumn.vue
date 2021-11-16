<script setup>
defineProps({
    heading: String,
    items: Array,
})

import RetroCard from './RetroCard.vue';
</script>

<template>
    <div class="drop-zone">
        <h1>{{heading}}</h1>
        <div v-for='item in items' :key='item.title' class='drag-el'>
            <RetroCard :item='item' />
        </div>
    </div>
</template>