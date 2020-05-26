import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from '@/components/pages/AboutMe'
import Projects from '@/components/pages/Projects'
import Contacts from '@/components/pages/Contacts'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'About me',
            component: AboutMe
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: Contacts
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});

export default router;