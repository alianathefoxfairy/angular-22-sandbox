import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard";
import { DashboardHome } from "../dashboard-home/dashboard-home";
import { Profile } from "../profile/profile";
import { Settings } from "../settings/settings";
import { Orders } from "../orders/orders";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: Dashboard,
        children: [
            {   // Important!
                path: '',
                redirectTo:'dashboardhome',
                pathMatch:'full'
            },
            {
                path: 'dashboardhome',
                component: DashboardHome
            },
            {
                path: 'profile',
                component: Profile
            },
            {
                path: 'settings',
                //component: Settings
                // Lazy Loading
                loadComponent: () => import('../settings/settings').then(c => c.Settings)
            },
            {
                path: 'orders',
                component: Orders
            }
        ]
    }
]