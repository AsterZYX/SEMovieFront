import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/view/Common'
import Home from '@/components/Home'
import MovieList from '@/components/MovieList'
import MovieRank from '@/components/MovieRank'
import MovieTicket from '@/components/MovieTicket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      component: Common,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/list',
          name: 'movie-list',
          component: MovieList,
        },
        {
          path: '/rank',
          name: 'movie-rank',
          component: MovieRank,
        },
        {
          path: '/ticket',
          name: 'movie-ticket',
          component: MovieTicket,
        }
      ]
    }
  ]
})
