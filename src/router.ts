import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Markdown from './components/Markdown.vue';
import SwitchPage from './components/SwitchPage.vue';
import ButtonPage from './components/ButtonPage.vue';
import DialogPage from './components/DialogPage.vue';
import TabsPage from './components/TabsPage.vue';
import IconPage from './components/IconPage.vue';
import RadioPage from './components/RadioPage.vue';
import ToastPage from './components/ToastPage.vue';
import PopoverPage from './components/PopoverPage.vue';
import LayoutPage from './components/LayoutPage.vue';
import InputPage from './components/InputPage.vue';
import CollpasePage from './components/CollapsePage.vue';
import GridPage from './components/GridPage.vue';
import PaginationPage from './components/PaginationPage.vue';
import SlidesPage from './components/SlidesPage.vue'
//@ts-ignore
import install from './markdown/install.md';
//@ts-ignore
import intro from './markdown/intro.md';
//@ts-ignore
import getStarted from './markdown/get-started.md';
import {h} from 'vue';

const md = (content) => h(Markdown, {content: content, key: content});
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc, children: [
        {
          path: '',
          redirect: 'doc/intro'
        },
        {
          path: 'intro',
          component: md(intro)
        },
        {
          path: 'install',
          component: md(install)
        },
        {
          path: 'get-started',
          component: md(getStarted)
        },
        {
          path: 'switch',
          component: SwitchPage,
        },
        {
          path: 'button',
          component: ButtonPage,
        },
        {
          path: 'dialog',
          component: DialogPage,
        },
        {
          path: 'tabs',
          component: TabsPage,
        },
        {
          path: 'icon',
          component: IconPage
        },
        {
          path: 'radio',
          component: RadioPage
        },
        {
          path: 'toast',
          component: ToastPage
        },
        {
          path: 'popover',
          component: PopoverPage
        },
        {
          path: 'layout',
          component: LayoutPage,
        },
        {
          path: 'input',
          component: InputPage
        },
        {
          path: 'collapse',
          component: CollpasePage,
        },
        {
          path: 'grid',
          component: GridPage,
        },
        {
          path: 'pagination',
          component: PaginationPage,
        },
        {
          path: 'slides',
          component: SlidesPage
        }
      ]
    }
  ]
});

export default router;