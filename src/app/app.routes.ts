import { Routes } from '@angular/router';

const additionalRoutes: Routes = [
    {
        path: 'lazyloaded-module',
        loadChildren: () => import('@modules').then(
            (m) => m.LazyloadedModule
        ),
    },
]

export const routes: Routes = [
    // From newer versions, Angular team sugest to actually use the standalone components, instead of modules.
    {
        path: 'lazyloaded-module',
        loadChildren: () => import('@modules').then(
            (m) => m.LazyloadedModule
        ),
    },
    {
        path: 'lazyloaded-module-with-dynamic-routes', 
        loadChildren: () => import('@modules').then(
            (m) => m.LazyloadedWithDynamicRoutesModule
        ),
        data: { additionalRoutes }
    }
];
