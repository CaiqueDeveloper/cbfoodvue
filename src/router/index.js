import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/LoginView.vue'
import RequestFreeYourDemo from '@/views/auth/RequestFreeYourDemoView.vue'
import Dashboard from '@/views/dashboard/Dashboard.vue'
import Products from '@/views/product/ProductsView.vue'


const routes = [{
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {layout: 'dashboard'}
  },{
    path: '/products',
    name: 'products',
    component: Products,
    meta: {layout: 'dashboard'}
  },{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {layout: 'auth'}
  },{
    path: '/requestFreeYourDemo',
    name: 'requestFreeYourDemo',
    component: RequestFreeYourDemo,
    meta: {layout: 'auth'}
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {

  const publicPages = ['/login', '/requestFreeYourDemo'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('access_token');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }

});

export default router
