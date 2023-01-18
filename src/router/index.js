import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/LoginView.vue')
  },{
    path: '/requestFreeYourDemo',
    name: 'requestFreeYourDemo',
    component: () => import('../views/auth/RequestFreeYourDemoView.vue')
  },{
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
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
