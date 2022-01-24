import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSocketIOExt from 'vue-socket.io-extended';
import { io } from "socket.io-client";

export const SocketInstance = io(import.meta.env.VITE_WEBSOCKET_URL);

const app = createApp(App);
app.use(VueSocketIOExt, SocketInstance);
app.mount('#app');
