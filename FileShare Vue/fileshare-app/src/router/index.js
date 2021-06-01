import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Help from '../views/Help.vue';
import Dashboard from '../views/Dashboard.vue';
import Logout from '../views/Logout.vue';
import Download from '../views/Download.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
  {
    path: '/help',
    name: 'Help',
    component: Help,
  },
  {
    path: '/down',
    name: 'Download',
    component: Download,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) next({ name: 'Login' });
      next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

function isAuthenticated() {
  console.log(Vue.$cookies.get('sid'));
  if (Vue.$cookies.get('sid')) return true;
  else return false;
}

export default router;
