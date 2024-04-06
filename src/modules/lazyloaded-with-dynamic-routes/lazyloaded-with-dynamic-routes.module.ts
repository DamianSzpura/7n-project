import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { routes } from './lazyloaded-with-dynamic-routes.routes';
import { Component2Component } from './components';

export const loadModuleWithDynamicRoutes = (additionalRoutes: Route[]) => {
  @NgModule({
    declarations: [Component2Component],
    imports: [
      CommonModule,
      RouterModule.forChild([...routes, ...additionalRoutes])
    ]
  })
  class LazyloadedWithDynamicRoutesModule {}

  return LazyloadedWithDynamicRoutesModule
}
