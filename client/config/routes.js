// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:id',
    path: '/app',
    // props: true,
    components: {
      default: () => import('../views/todo/todo.vue'),
      a: () => import('../views/login/login.vue')
    },
    component: () => import('../views/todo/todo.vue'),
    // name: 'app',
    // beforeEnter(to, from, next) {
    //   console.log('app route enter')
    //   next()
    // },
    meta: {
      title: 'this is app',
      discription: 'page discription'
    },
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import('../views/login/login.vue')
  },
  // {
  //   path: '/login/exact',
  //   component: () => import('../views/login/login.vue')
  // }
]
