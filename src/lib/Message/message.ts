import {App, createApp, h, VNode} from 'vue';
import ToastComponent from './Message.vue';

interface OptionProps {
  message: VNode,
  afterClose?: Function,
  time: number,
  type: 'success' | 'error' | 'waring',
}

let app: App;
let timer: NodeJS.Timeout;


function unmountToast() {
  const toastDOM = document.getElementById('g-toast-wrapper');
  if (toastDOM) {
    app.unmount();
    toastDOM.remove();
  }
}

export const Message = {
  show(options: OptionProps) {
    const {message,afterClose,time = 3,...rest} = options;
    unmountToast();
    clearTimeout(timer);
    const div = document.createElement('div');
    div.id = 'g-toast-wrapper';
    document.body.appendChild(div);
    app = createApp({
        render() {
          return h(ToastComponent,
            {
              message,
              show: true,
              afterClose,
              time,
              ...rest,
              'onUpdate:show': (newShow) => {
                if (newShow === false) {
                  unmountToast();
                }
              }
            });
        }
      }
    );
    if (time) {
      timer = setTimeout(() => {
        this.close(afterClose);
      }, time * 1000);
    }
    app.mount(div);
  },
  close(afterClose) {
    unmountToast();
    if (afterClose) afterClose();
  },
};