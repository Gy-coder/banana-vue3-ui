import {App, createApp, h, VNode} from 'vue';
import ToastComponent from './Toast.vue';

interface OptionProps {
  message: VNode,
  autoClose?: boolean | number
  clickClose?: boolean
  onMaskClick?: Function,
  afterClose?: Function,
  style: Object,
  position?: 'top' | 'middle' | 'bottom'
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

export const Toast = {
  show(options: OptionProps) {
    const {message, autoClose = 3,afterClose,...rest} = options;
    unmountToast();
    clearTimeout(timer);
    const div = document.createElement('div');
    div.id = 'g-toast-wrapper';
    document.body.appendChild(div);
    app = createApp({
        render() {
          return h(ToastComponent,
            {
              show: true,
              autoClose,
              afterClose,
              ...rest,
              'onUpdate:show': (newShow) => {
                if (newShow === false) {
                  unmountToast();
                }
              }
            },
            {
              default: () => message
            });
        }
      }
    );
    if (autoClose !== false && typeof autoClose === 'number') {
      timer = setTimeout(() => {
        this.close(afterClose);
      }, autoClose * 1000);
    }
    app.mount(div);
  },
  close(afterClose) {
    unmountToast();
    if (afterClose) afterClose();
  },
};