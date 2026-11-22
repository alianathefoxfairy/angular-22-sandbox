import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { authGuard } from './guards/auth-guard';
import { dashboardMatchGuard } from './guards/dashboard-match-guard';
import { Signal } from './pages/signal/signal';
import { Parent } from './pages/parent/parent';
import { OtherParent } from './pages/other-parent/other-parent';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'pages/other-parent',
        pathMatch: 'full',
    },
    {
        path: 'pages/login',
        component: Login 
    },
    {
        path: 'pages/register',
        component: Register
    },
    {
        path: 'pages/home',
        component: Home
    },
    {
        path: 'pages/signal',
        component: Signal 
    },
    {
        path: 'pages/parent',
        component: Parent 
    },
    {
        path: 'pages/other-parent',
        component: OtherParent 
    },
    {
        path: 'pages/about',
        // component: About
        // Lazy loading
        loadComponent: () => import('./pages/about/about').then(c => c.About)
    },
    {
        path: 'pages/contact',
        //component: Contact
        // Lazy loading
        loadComponent: () => import('./pages/contact/contact').then(c => c.Contact)
    },
    {   
        path: 'pages/products',
        //component: Products
        // Lazy loading
        loadComponent: () => import('./pages/products/products').then(c => c.Products)
    },
    {
        path: 'pages/product-details/:id',    //dynamic route parameter
        component: ProductDetails
    },
    {
        path: 'pages/dashboard',
        //component: Dashboard,
        // canActivate: [authGuard],
        canMatch: [dashboardMatchGuard],
        loadChildren: () => 
            import('./pages/dashboard/dashboard.routes')
                .then(r => r.DASHBOARD_ROUTES)
    },
    {   //must always be last in the list
        path: '**',
        component: PageNotFound
    }
];
