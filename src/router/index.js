import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import theme25v2a from '../views/theme25v2a'
import theme32v2a from '../views/theme32v2a'
import sample from '../views/sample'

import about25v2a from '../components/theme25a/about'
import work25v2a from '../components/theme25a/work'
import porto25v2a from '../components/theme25a/porto'
import edu25v2a from '../components/theme25a/edu'
import skills25v2a from '../components/theme25a/skills'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/theme25v2a',
    name: 'theme25v2a',
    component: theme25v2a,
    children: [{
        path: 'about',
        component: about25v2a
      },
      {
        path: 'work',
        component: work25v2a
      },
      {
        path: 'porto',
        component: porto25v2a
      },
      {
        path: 'edu',
        component: edu25v2a
      },
      {
        path: 'skills',
        component: skills25v2a
      }
    ]
  },
  {
    path: '/theme32v2a',
    name: 'theme32v2a',
    component: theme32v2a
  },
  {
    path: '/sample',
    name: 'sample',
    component: sample
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router