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
        icon() {
            return new URL('../assets/retro/'+this.color+'.svg', import.meta.url).href
        },
    },
}
</script>

<template>
    <div class="drop-zone p-4 space-y-4">
        <h1 class="py-2 my-2 text-l font-bold text-gray-500 border-b-2 border-gray-500"><img :src="icon" alt="" class="float-left pr-2">{{heading}}</h1>
        <form @submit="submit($event)" class="bg-white shadow-md my-2 p-4">
            <div class="flex">
            <input type="text" name="title" :placeholder="hint" class="flex-1 focus:outline-none focus-visible:outline-none">
            <button type="submit" class="ml-4 flex-none p-2 bg-blue text-white justify-self-end hover:bg-navy">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10_24)">
                <path d="M3.5 14.498L0.5 11.498L3.5 8.49799" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M0.5 11.498H10.5C11.8261 11.498 13.0979 10.9712 14.0355 10.0335C14.9732 9.09584 15.5 7.82407 15.5 6.49799C15.5 5.1719 14.9732 3.90013 14.0355 2.96245C13.0979 2.02477 11.8261 1.49799 10.5 1.49799H6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_10_24">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </button>
            </div>
        </form>
        <div v-for='item in items' :key='item.title' draggable="true" @dragstart="startDrag($event, item)" class="my-2 p-4 shadow-md bg-white">
            <RetroCard :item='item' />
        </div>
    </div>
</template>