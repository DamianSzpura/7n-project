import { Component, inject } from '@angular/core';
import { CommunicationLayerService } from '@services';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lazyloaded',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './lazyloaded.component.html',
})
export class LazyloadedComponent {
  private readonly communicationLayer = inject(CommunicationLayerService);
  
  onChangeTitleToHorray(): void {
    this.communicationLayer.changeTitle(`Horray! - I'm lazy loaded component!`);
  }  
}
