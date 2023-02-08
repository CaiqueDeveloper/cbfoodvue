import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon } from "@iconify/vue";
import PerfectScrollbar from "vue3-perfect-scrollbar";
import VueTheMask from 'vue-the-mask'
import VueApexCharts from "vue3-apexcharts";

import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import './assets/dependencies/css/tailwindcss/main.css'
import "./assets/dependencies/css/animate.css";
import "./assets/dependencies/css/windzo.css";
import AuthLayout from '@/components/layouts/auth/AuthLayout.vue';
import DashboardLayout from '@/components/layouts/dashboard/DashboardLayout.vue';
window.$ = require('jquery');
var dt = require('datatables.net');
window.$.DataTable = dt;

const app = createApp(App)
app.use(router, Icon)
app.use(PerfectScrollbar)
app.use(store)
app.use(VueTheMask)
app.use(VueApexCharts)
app.component('auth-layout', AuthLayout)
app.component('dashboard-layout', DashboardLayout)
app.mount('#app')

