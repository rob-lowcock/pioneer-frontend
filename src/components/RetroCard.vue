<script setup>
defineProps({
    item: Object,
})
</script>

<template>
    <div class="card text-gray-500">
        {{ item.title }}
    </div>
    <div class="card-details flex items-center">
        <div class="score flex-1 text-sm text-gray-500"></div>
        <div class="upvote flex-none">
            <button class="w-4 h-4 group">
                <svg class="w-4 h-4 fill-current text-white group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" stroke="#6B727A" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3.5 14.5c.352.012.702.068 1.04.167 2.667.76 2.813.846 3.52.846h3.273a4 4 0 0 0 4-3.6l.2-3.4a2.993 2.993 0 0 0-2.266-3.06c-.72-.18-1.727-.18-1.727-1.186V2a1.5 1.5 0 1 0-3 0c0 .067.44 6.033-5 6.033L3.5 14.5ZM3.5 6.5h-3v9h3v-9Z"/>
                </svg>
            </button>
        </div>
    </div>
</template>