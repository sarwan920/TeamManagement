import { createRouter, createWebHistory } from 'vue-router';

import UsersList from './components/users/UsersList.vue'
import TeamsList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'
import PageNotFound from './components/nav/PageNotFound.vue'
import TeamFooter from './components/teams/TeamFooter.vue'
import UserFooter from './components/users/UserFooter.vue'






const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },

        { 
            name: 'user', 
            path: '/users', 
            components: 
            { default: UsersList, footer:UserFooter},
            meta:{title:'Users'},
            beforeEnter(to,from,next){
                console.log('Before Enter');
                console.log(to,from);
                next();
            }
         },

        {
            name: 'teams',
            path: '/teams', 
            components: { default: TeamsList, footer: TeamFooter }, 
            children: [
                { 
                    name: 'team-members', 
                    path: ':teamId', 
                    component: TeamMembers, 
                    props: true,
                    meta:{title:'Team Members'} 
                },
            ],
            meta: { title: 'Teams',needsAuth:true }
        },

        { path: '/:notFound(.*)', component: PageNotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior(_,_2,savedPosition){
        // console.log(to,from,savedPosition)
        if(savedPosition){
            return savedPosition;
        }
        return{
            left:0,
            top:0
        }
    }

});


router.beforeEach((to,from,next)=>{
console.log('Global beforeEach');
    console.log(to,from)
   document.title=to.meta.title;

   if(to.meta.needsAuth){
       console.log('Needs Auth!');
       next();
   }else{
       next();
   }
    // if(to.name==='team-members'){
    //     next();
    // }else{
    //     next({name:'team-members' , params:{ teamId:'t2' }})
    // }
    

});



// router.afterEach((to,from)=>{

// });

export default router;