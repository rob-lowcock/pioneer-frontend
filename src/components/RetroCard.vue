<script setup>
defineProps({
    item: Object,
})
</script>

<template>
    <div class="card">
        {{ item.title }}
    </div>
</template>