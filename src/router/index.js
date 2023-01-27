import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/LoginView.vue'
import RequestFreeYourDemo from '@/views/auth/RequestFreeYourDemoView.vue'
let appname = " - Cbfood Delivery";
function lazyLoad(view){
  return() => import(`@/views/${view}.vue`)
}

const routes = [{
    path: '/admin/dashboard',
    name: 'dashboard',
    component: lazyLoad('dashboard/Dashboard'),
    meta: {layout: 'dashboard', title: "Dashboard " + appname}
  },{
    path: '/admin/company',
    name: 'company',
    component: lazyLoad('company/Company'),
    meta: {layout: 'dashboard' , title: "Company " + appname}
  },{
    path: '/admin/permissions',
    name: 'permissions',
    component: lazyLoad('permission/Permission'),
    meta: {layout: 'dashboard', title: "Permission " + appname}
  },{
    path: '/admin/users',
    name: 'users',
    component: lazyLoad('user/User'),
    meta: {layout: 'dashboard', title: "User " + appname}
  },{
    path: '/admin/systemUsabilityControl',
    name: 'systemUsabilityControl',
    component: lazyLoad('systemUsabilityControl/SystemUsabilityControl'),
    meta: {layout: 'dashboard', title: "System Usability Control " + appname}
  },{
    path: '/admin/import',
    name: 'import',
    component: lazyLoad('import/ImportReport'),
    meta: {layout: 'dashboard', title: "Import Report " + appname}
  },{
    path: '/admin/deliveries',
    name: 'deliveries',
    component: lazyLoad('deliveries/Deliveries'),
    meta: {layout: 'dashboard', title: "Deliveries " + appname}
  },{
    path: '/admin/orders',
    name: 'orders',
    component: lazyLoad('orders/Orders'),
    meta: {layout: 'dashboard', title: "Orders " + appname}
  },{
    path: '/admin/category',
    name: 'category',
    component: lazyLoad('category/Category'),
    meta: {layout: 'dashboard', title: "Category " + appname}
  },{
    path: '/admin/products',
    name: 'products',
    component: lazyLoad('product/Products'),
    meta: {layout: 'dashboard', title: "Product " + appname}
  },{
    path: '/admin/additional',
    name: 'additional',
    component: lazyLoad('additional/Additional'),
    meta: {layout: 'dashboard', title: "Additional " + appname}
  },{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {layout: 'auth' , title: "Login " + appname}
  },{
    path: '/requestFreeYourDemo',
    name: 'requestFreeYourDemo',
    component: RequestFreeYourDemo,
    meta: {layout: 'auth', title: "Request Free Your Demo " + appname}
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
  document.title = to.meta.title;
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }

});

export default router
