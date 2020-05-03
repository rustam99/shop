import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _48d5a1f9 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages_categories_index" */))
const _34bbb8ac = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _4b25cea1 = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages_categories__id" */))
const _6b141595 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/categories",
    component: _48d5a1f9,
    name: "categories"
  }, {
    path: "/login",
    component: _34bbb8ac,
    name: "login"
  }, {
    path: "/categories/:id",
    component: _4b25cea1,
    name: "categories-id"
  }, {
    path: "/",
    component: _6b141595,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
