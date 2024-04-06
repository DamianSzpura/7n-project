import { Injector, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { routes } from './lazyloaded-with-dynamic-routes.routes';
import { Component1Component } from './components';



@NgModule({
  declarations: [Component1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LazyloadedWithDynamicRoutesModule { 
  constructor(private readonly injector: Injector) {}

  loadAdditionalRoutes() {
      const activatedRoute = this.injector.get(ActivatedRoute);
      const router = this.injector.get(Router);
      const additionalRoutes = activatedRoute.snapshot.data['additionalRoutes'];

      router.resetConfig([...router.config, ...additionalRoutes]);
  }
}
