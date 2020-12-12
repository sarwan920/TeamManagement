import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import UsersList from './components/users/UsersList.vue'
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import PageNotFound from './components/nav/PageNotFound.vue'

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {name:'user', path: '/users', component: UsersList, },
        {
            name:'teams',
            path: '/teams', component: TeamsList, children: [
                {name:'team-members', path: ':teamId', component: TeamMembers, props: true },
            ]
        },

        { path: '/:notFound(.*)', component: PageNotFound }
    ],
    linkActiveClass: 'active',

});


const app = createApp(App)
app.use(router);

app.mount('#app');
