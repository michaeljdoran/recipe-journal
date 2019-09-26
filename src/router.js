import Vue from 'vue'
import Router from 'vue-router'
import Recipes from './components/Recipes.vue'
import About from './components/About.vue'
import RecipePage from './components/RecipePage/RecipePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/recipe/:name',
      name: 'recipepage',
      component: RecipePage
    }
  ]
})