import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/LoginView.vue'
import RequestFreeYourDemo from '@/views/auth/RequestFreeYourDemoView.vue'

function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [{
    path: '/admin/dashboard',
    name: 'dashboard',
    component: lazyLoad('dashboard/Dashboard'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/company',
    name: 'company',
    component: lazyLoad('company/Company'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/permissions',
    name: 'permissions',
    component: lazyLoad('permission/Permission'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/users',
    name: 'users',
    component: lazyLoad('user/User'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/systemUsabilityControl',
    name: 'systemUsabilityControl',
    component: lazyLoad('systemUsabilityControl/SystemUsabilityControl'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/import',
    name: 'import',
    component: lazyLoad('import/ImportReport'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/deliveries',
    name: 'deliveries',
    component: lazyLoad('deliveries/Deliveries'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/orders',
    name: 'orders',
    component: lazyLoad('orders/Orders'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/category',
    name: 'category',
    component: lazyLoad('category/Category'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/products',
    name: 'products',
    component: lazyLoad('product/Products'),
    meta: {layout: 'dashboard'}
  },{
    path: '/admin/additional',
    name: 'additional',
    component: lazyLoad('additional/Additional'),
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
