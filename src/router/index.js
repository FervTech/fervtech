import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';
import About from '@/views/About.vue';
import Contact from '@/views/Contact.vue';
import WebDevelopment from '@/views/Services/WebDevelopment.vue';
import AppDevelopment from '@/views/Services/AppDevelopment.vue';
import RpaSolutions from '@/views/Services/RpaSolutions.vue';
import GraphicDesign from '@/views/Services/GraphicDesign.vue';

// Add this import for services overview (create if missing, see below)
import ServicesOverview from '@/views/Services/Overview.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: ServicesOverview },  // New: Catches /services
    { path: '/services/web-development', component: WebDevelopment },
    { path: '/services/app-development', component: AppDevelopment },
    { path: '/services/rpa-solutions', component: RpaSolutions },
    { path: '/services/graphic-design', component: GraphicDesign },
    { path: '/products', component: Products },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;