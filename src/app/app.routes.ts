import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { NetworkingComponent } from './pages/networking/networking.component';
import { DetailsComponent } from './pages/cloud-instance/details/details.component';

export const routes: Routes = [
    {
        path: 'sign-up',
        loadComponent: () => import('../app/pages/auth/signup/signup.component').then(m => m.SignupComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('../app/pages/auth/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'forgot-password',
        loadComponent: () => import('../app/pages/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard', loadComponent: () => import('../app/pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'cloud-instance', loadComponent: () => import('../app/pages/cloud-instance/cloud-instance.component').then(m => m.CloudInstanceComponent)
            },
            {
                path: 'cloud-instance/checkout', loadComponent: () => import('../app/pages/cloud-instance/checkout/checkout.component').then(m => m.CheckoutComponent)
            },
            {
                path: 'cloud-instance/details',
                component: DetailsComponent,
                children: [
                    {
                        path: 'graphs', loadComponent: () => import('./pages/cloud-instance/details/graphs/graphs.component').then(m => m.GraphsComponent)
                    },
                    {
                        path: 'access', loadComponent: () => import('./pages/cloud-instance/details/access/access.component').then(m => m.AccessComponent)
                    },
                    {
                        path: 'power', loadComponent: () => import('./pages/cloud-instance/details/power/power.component').then(m => m.PowerComponent)
                    },
                    {
                        path: 'volumes', loadComponent: () => import('./pages/cloud-instance/details/volumes/volumes.component').then(m => m.VolumesComponent)
                    },
                    {
                        path: 'networking', loadComponent: () => import('./pages/cloud-instance/details/networking/networking.component').then(m => m.NetworkingComponent)
                    },
                    {
                        path: 'backups', loadComponent: () => import('./pages/cloud-instance/details/backups/backups.component').then(m => m.BackupsComponent)
                    },
                    {
                        path: 'snapshots', loadComponent: () => import('./pages/cloud-instance/details/snapshots/snapshots.component').then(m => m.SnapshotsComponent)
                    },
                    {
                        path: 'destroy', loadComponent: () => import('./pages/cloud-instance/details/destroy/destroy.component').then(m => m.DestroyComponent)
                    },
                    {
                        path: 'history', loadComponent: () => import('./pages/cloud-instance/details/history/history.component').then(m => m.HistoryComponent)
                    },
                    {
                        path: 'tags', loadComponent: () => import('./pages/cloud-instance/details/tags/tags.component').then(m => m.TagsComponent)
                    },
                    {
                        path: 'resize', loadComponent: () => import('./pages/cloud-instance/details/resize/resize.component').then(m => m.ResizeComponent)
                    },
                ]
            },
            {
                path: 'kubernetes/checkout', loadComponent: () => import('../app/pages/kubernetes/checkout/checkout.component').then(m => m.CheckoutComponent)
            },
            {
                path: 'object-storage/checkout', loadComponent: () => import('../app/pages/object-storage/checkout/checkout.component').then(m => m.CheckoutComponent)
            },
            {
                path: 'block-storage/checkout', loadComponent: () => import('../app/pages/block-storage/checkout/checkout.component').then(m => m.CheckoutComponent)
            },
            {
                path: 'networking', component: NetworkingComponent,
                children: [
                    {
                        path: '',
                        redirectTo: 'reserved-ips',
                        pathMatch: 'full'
                    },
                    {
                        path: 'load-balancer', loadComponent: () => import('../app/pages/load-balancer/load-balancer.component').then(m => m.LoadBalancerComponent)
                    },
                    {
                        path: 'reserved-ips', loadComponent: () => import('../app/pages/reserved-ips/reserved-ips.component').then(m => m.ReservedIpsComponent)
                    },
                    {
                        path: 'vpc/create-vpc', loadComponent: () => import('../app/pages/vpc/create-vpc/create-vpc.component').then(m => m.CreateVpcComponent)
                    },

                    {
                        path: 'vpc', loadComponent: () => import('../app/pages/vpc/vpc.component').then(m => m.VpcComponent)
                    },
                    {
                        path: 'firewalls', loadComponent: () => import('../app/pages/firewalls/firewalls.component').then(m => m.FirewallsComponent)
                    },
                ]

            },
            {
                path: 'networking/load-balancer/checkout', loadComponent: () => import('../app/pages/load-balancer/checkout/checkout.component').then(m => m.CheckoutComponent)
            },
            {
                path: 'snapshot', loadComponent: () => import('../app/pages/snapshots/snapshots.component').then(m => m.SnapshotsComponent)
            },
            {
                path: 'backups', loadComponent: () => import('../app/pages/backup/backup.component').then(m => m.BackupComponent)
            },

        ]
    }
];
