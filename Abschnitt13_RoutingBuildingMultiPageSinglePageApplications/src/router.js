import { createRouter, createWebHistory } from 'vue-router';

import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsList from './components/pages/TeamsList.vue';
import UsersList from './components/pages/UsersList.vue';
import TeamsFooter from './components/pages/TeamsFooter.vue';
import UsersFooter from './components/pages/UsersFooter.vue';
import NotFound from './components/pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/teams' },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true },
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    // { path: '/teams/:teamId', component: TeamMembers, props: true },
    // { path: '/:notFound(.*)', redirect: '/teams' },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  linkActiveClass: 'active',
  scrollBehavior(savedPosition) {
    return savedPosition ? savedPosition : { left: 0, top: 0 };
  },
});

// routher life cycle hooks first global, route level, component level

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!');
    next();
  } else {
    next();
  }
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({
  //     name: 'team-members',
  //     params: { teamId: 't2' },
  //   });
  // }
  next();
});

router.afterEach((to, from) => {
  // used for sending analytics data
  console.log('Global afterEach');
  console.log(to, from);
});

export default router;
