import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import UsersList from './components/users/UsersList.vue'
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'

import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/users', component: UsersList },
        { path: '/teams', component: TeamsList },
        {path:'/teams/:teamId', component: TeamMembers, props:true}
    ],
    linkActiveClass: 'active',

});


const app = createApp(App)
app.use(router);

app.mount('#app');