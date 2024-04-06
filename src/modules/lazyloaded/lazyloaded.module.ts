import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRoutes } from '@angular/router';
import { Component1Component } from './components';
import { routes } from './lazyloaded.routes';

@NgModule({
  declarations: [
    Component1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ]
})
export class LazyloadedModule { }
