
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'daisyui/dist/full.css'
import 'vanta/dist/vanta.birds.min';

createApp(App).use(store).use(router).mount('#app')
