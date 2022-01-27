<script setup>
import { computed } from '@vue/reactivity'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import RetroApp from './components/RetroApp.vue';
</script>

<script>
export default {
}
</script>

<template>
    <!-- <p><router-link to="/">Go to home</router-link></p>
    <p><router-link to="/about">Go to about</router-link></p> -->
    <router-view></router-view>
</template>