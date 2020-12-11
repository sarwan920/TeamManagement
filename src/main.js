import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import UsersList from './components/users/UsersList.vue'
import TeamsList from './components/teams/TeamsList.vue'

import App from './App.vue';

const router= createRouter({
    history:createWebHistory(),
    routes:[
        { path:'/users' , component:UsersList},
        {path:'/teams',component:TeamsList}
    ],
    linkActiveClass:'active'
});


const app = createApp(App)
app.use(router);

app.mount('#app');
