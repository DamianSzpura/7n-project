import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommunicationLayerService } from '@services';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, ButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly communicationLayer = inject(CommunicationLayerService);
  
  readonly title$ = this.communicationLayer.title$;

  onChangePage(navigateTo: string): void {
    this.router.navigate([navigateTo]);
  }

  onResetTitle(): void {
    this.communicationLayer.resetTitle();
    }  
}
