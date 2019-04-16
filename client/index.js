import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import Vuex from 'vuex'
import creatStore from './store/store'

import './assets/styles/global.sass'
// // // import actions from './store/actions/actions';

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = creatStore()

// store.registerModule('c', {
//   state: {
//     text: 'ccc'
//   }
// })

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('newCount watch: ', newCount)
// })

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// })

// store.unregisterModule('c')

router.beforeEach((to, from, next) => {
  console.log('beforeEach router')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve router')
  next()
})

router.afterEach((to, from) => {
  console.log('afterEach router')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
