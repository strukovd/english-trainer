import { registerPlugins } from '@/plugins/index';
import './styles/main.scss';

// Components
import App from './App.vue';
// import { BaseButton, BaseDatePicker, BaseHeader, BaseTextBox, BaseTabs, BaseIsland, BaseFilePicker, UnavailableContent } from '@/components/global';

// Composables
import { createApp } from 'vue';
import { useAppStore } from './stores';
// import validateFieldDirective from './directives/validateFieldDirective';
// import isModifiedDirective from './directives/isModifiedDirective';

const app = createApp(App);

registerPlugins(app);
// app.component("BaseButton", BaseButton);
// app.component("BaseDatePicker", BaseDatePicker);
// app.component("BaseTextBox", BaseTextBox);
// app.component("BaseHeader", BaseHeader);
// app.component("BaseTabs", BaseTabs);
// app.component("BaseIsland", BaseIsland);
// app.component("BaseFilePicker", () => import('@/components/global/BaseFilePicker.vue'));
// app.component("UnavailableContent", UnavailableContent);



const AppComponent = app.mount('#app');
const appStore = useAppStore();
