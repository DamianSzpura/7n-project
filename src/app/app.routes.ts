import { Routes } from '@angular/router';

const additionalRoutes: Routes = [
    {
        path: 'lazyloaded-module',
        loadChildren: () => import('@modules/lazyloaded').then(
            (m) => m.LazyloadedModule
        ),
    },
]

export const routes: Routes = [
    // From newer versions, Angular team sugest to actually use the standalone components, instead of modules.
    {
        path: 'lazyloaded-module',
        loadChildren: () => import('@modules/lazyloaded').then(
            (m) => m.LazyloadedModule
        ),
    },
    {
        path: 'lazyloaded-module-with-dynamic-routes', 
        loadChildren: () => import('@modules/lazyloaded-with-dynamic-routes').then(
            (m) => m.loadModuleWithDynamicRoutes(additionalRoutes))
    },
    {
        path: 'lazyloaded-component', 
       loadComponent: () => import('@components/lazyloaded').then((c) => c.LazyloadedComponent)
    }
];
