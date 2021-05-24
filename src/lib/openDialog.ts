// @ts-ignore
import Dialog from '../lib/Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
  const {title, content, ok, cancel,closeOnClickOverlay} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const app = createApp({
    render() {
      return h(Dialog, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            //@ts-ignore
            app.unmount(div);
            div.remove();
          }
        },
        ok,cancel,closeOnClickOverlay
      }, {
        title:()=>title,
        content:()=>content,
      });
    }
  });
  app.mount(div);
};