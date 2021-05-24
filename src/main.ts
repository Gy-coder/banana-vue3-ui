import './lib/g.scss'
import './index.scss';
import {createApp} from 'vue';
import App from './App.vue';
import router from './router'
import EventBus from './util/eventbus'
import 'github-markdown-css'
import Markdown from './components/Markdown.vue';

const $bus = new EventBus()



const app = createApp(App)
app.use(router)
app.provide('$bus', $bus)
app.mount('#app')
app.component('Markdown',Markdown)
