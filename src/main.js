import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

// PrimeVue Setup

import PrimeVue from "primevue/config";

// Add Theme and Styles
import 'primevue/resources/themes/md-light-deeppurple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// Add PrimeFlex
import 'primeflex/primeflex.css'

// Add Components
import InputText from "primevue/inputtext";
import SplitButton from 'primevue/splitbutton';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";

const app = createApp(App);
app.use(PrimeVue);
app.component('pv-input-text',InputText)
app.component('pv-split-button', SplitButton)
app.component('pv-data-table', DataTable)
app.component('pv-column', Column)
app.component('pv-button', Button)
app.component('pv-input-switch', InputSwitch)
app.component('pv-input-mask', InputMask)
app.component('pv-input-number', InputNumber)
app.component('pv-calendar', Calendar)
app.mount('#app');


