import { createApp } from 'vue'
import App from './App.vue'
import RetroApp from './components/RetroApp.vue'
import PageNotFound from './components/errors/PageNotFound.vue'
import './index.css'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from "socket.io-client";
import { createRouter, createWebHistory } from 'vue-router';

export const SocketInstance = io(import.meta.env.VITE_WEBSOCKET_URL);

const About = { template: '<div>About</div>' };

const router = createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes: [
        { path: '/', component: RetroApp },
        { path: '/about', component: About },
        { path: '/:pathMatch(.*)*', component: PageNotFound },
    ]
});

const app = createApp(App);
app.use(VueSocketIOExt, SocketInstance);
app.use(router);
app.mount('#app');
