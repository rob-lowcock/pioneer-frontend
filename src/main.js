import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from "socket.io-client";

export const SocketInstance = io('ws://localhost:8080');

const app = createApp(App);
app.use(VueSocketIOExt, SocketInstance);
app.mount('#app');
