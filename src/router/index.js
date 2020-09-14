import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home/home";
import search from "../views/search/search";
import person from "../views/person/person";
import order from "../views/order/order";
import Login from "../views/Login/Login";
Vue.use(VueRouter)
export default new VueRouter({
  routes:[{
    path: '/',
    component: home,
    meta:{
      showFooter:true
    }
  },
    {
      path: '/home',
      component: home,
      meta:{
        showFooter:true
      },
    },
    {
      path: '/search',
      component: search,
      meta:{
          showFooter:true
            },
      // component: () => import(/* webpackChunkName: "about" */ '../views/search.vue')

    },
    {
      path: '/order',
      component: order,
      meta:{
        showFooter:true
      },
      // component: () => import(/* webpackChunkName: "about" */ '../views/order.vue')
    },
    {
      path: '/person',
      component: person,
      meta:{
        showFooter:true
      },
      // component: () => import(/* webpackChunkName: "about" */ '../views/person.vue')
    },{
      path: '/login',
      component: Login,
      meta:{
        showFooter: false
      }
    }]
})




// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
//
// Vue.use(VueRouter)
//
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = new VueRouter({
// //   mode: 'history',
// //   base: process.env.BASE_URL,
// //   routes
// // })
// //
// // export default router
