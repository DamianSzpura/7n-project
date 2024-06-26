import { Routes } from '@angular/router';
import { Component1Component } from './components';

export const routes: Routes = [
    // From newer versions, Angular team sugest to actually use the standalone components, instead of modules.
    {
        path: '',
        redirectTo: 'component-1',
        pathMatch: 'full'
    },
    {
        path: 'component-1',
        component: Component1Component
    }
];
