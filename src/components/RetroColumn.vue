<script setup>
defineProps({
    heading: String,
    color: String,
    items: Array,
    column: Number,
    method: Function,
    hint: String,
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
        submit (evt) {
            evt.preventDefault()
            const form = evt.target
            this.$emit("submit-form", form.title.value, this.column)
            form.reset()
        },
    },
    computed: {
        headingColor () {
            return "bg-"+this.color+"" || 'bg-white'
        },
        borderColor() {
            return "focus:border-"+this.color+"" || "focus:border-blue"
        }
    },
}
</script>

<template>
    <div class="drop-zone">
        <h1 :class="headingColor" class="px-2 py-4 text-l font-bold text-white">{{heading}}</h1>
        <form @submit="submit($event)">
            <input type="text" name="title" :placeholder="hint" :class="borderColor" class="p-2 w-10/12">
            <input type="submit" value="Add" class="w-2/12 p-2 bg-blue text-white">
        </form>
        <div v-for='item in items' :key='item.title' draggable="true" @dragstart="startDrag($event, item)" class="m-2 p-2 rounded-md shadow bg-white">
            <RetroCard :item='item' />
        </div>
    </div>
</template>