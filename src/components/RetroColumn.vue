<script setup>
defineProps({
    heading: String,
    color: String,
    items: Array,
})

import RetroCard from './RetroCard.vue';
</script>

<script>
export default {
    methods: {
        startDrag (evt, item) {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },
        onDrop (evt, list) {
            const itemID = evt.dataTransfer.getData('itemID')
            const items = this.items.filter(item => item.id == itemID)
            item.list = list
        },
    },
    computed: {
        headingColor () {
            return "bg-"+this.color+"-200" || 'bg-white'
        },
    },
}
</script>

<template>
    <div class="drop-zone">
        <h1 :class="headingColor" class="p-2 text-xl font-bold text-gray-700">{{heading}}</h1>
        <div v-for='item in items' :key='item.title' draggable="true" @dragstart="startDrag($event, item)" class="m-2 p-2 rounded-md shadow bg-white">
            <RetroCard :item='item' />
        </div>
    </div>
</template>