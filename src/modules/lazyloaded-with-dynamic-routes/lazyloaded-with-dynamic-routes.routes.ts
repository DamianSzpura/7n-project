import { Routes } from '@angular/router';
import { Component2Component } from './components';

export const routes: Routes = [
    // From newer versions, Angular team sugest to actually use the standalone components, instead of modules.
    {
        path: '',
        redirectTo: 'component-2',
        pathMatch: 'full'
    },
    {
        path: 'component-2',
        component: Component2Component
    }
];
