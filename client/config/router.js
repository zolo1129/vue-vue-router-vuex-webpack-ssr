import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savePosition) {
      if (savePosition) {
        return savePosition
      } else {
        return {x: 0, y: 0}
      }
    },
    fallback: true
    // parseQuery(query) {
    //   console.log(query)
    // },
    // stringifyQuery(obj) {
    //   console.log(obj)
    // }
  })
}
