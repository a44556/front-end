import { createRouter, createWebHistory } from "vue-router";

// import Login from views
import Login from '../views/Login.vue';
import Dashbord from '../views/Dashbord.vue';
import Dashbordmain from '../views/Dashbordmain.vue';
import Database from '../views/Database.vue';
import Matrmonial from '../views/Matrmonial.vue';
import Product from '../views/Product.vue';
import Event from '../views/Event.vue';
import Contact from '../views/Contact.vue';
import Archives from '../views/Archives.vue';
import Requestpassword from '../views/Requestpassword.vue'
import Resetpassword from '../views/Resetpassword.vue'
import Landingpage from '../views/landingpage.vue'
import Registration from '../views/Registration.vue'
import Matrmonialdetails from '../views/Matrmonialdetails.vue'
import Privacy from '../views/Privacy.vue'

const routes = [
    { path: "/",
    component: Landingpage,
    name:'langingpage'
        },

    {
        path: '/dashbord',
        name: 'dashbord',

        component: Dashbord
        // meta: { requiresAuth: true }
    },
    {
        path: '/dashbordmain',
        name: 'dashbordmain',
        component: Dashbordmain
    },
    {
        path: '/database',
        name: 'database',
        component: Database
    },
    {
        path: '/matrimonial',
        name: 'matrimonial',
        component: Matrmonial
    },
    {
        path: '/product',
        name: 'product',
        component: Product
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact

    },

  {
        path: '/event',
        name: 'event',
        component: Event
    },
    {
        path: '/archives',
        name: 'archives',
        component: Archives
    },

    {
        path: '/registration',
        name: 'registration',
        component: Registration
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/requestpassword',
        name: 'requestpassword',
        component: Requestpassword
    },
    {
        path: '/resetpassword',
        name: 'resetpassword',
        component: Resetpassword
    },
    {
        path: '/matrmonialdetails',
        name: 'matrmonialdetails',
        component: Matrmonialdetails
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: Privacy
    },





];
 const router = createRouter({
    history:createWebHistory(),
    routes
 })
 
 export default router
