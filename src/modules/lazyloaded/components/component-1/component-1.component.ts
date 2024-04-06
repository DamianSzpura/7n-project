import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { CommunicationLayerService } from '@services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

@Component({
  templateUrl: './component-1.component.html',
})
export class Component1Component implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly communicationLayer = inject(CommunicationLayerService);
  
  readonly title$ = this.communicationLayer.title$;

  titleInputText: string = '';

  ngOnInit(): void {
    this.listenToTitleChange();
  }

  onSubmit(): void {
    if (!this.titleInputText) {
      return;
    }

    this.communicationLayer.changeTitle(this.titleInputText);
  }

  listenToTitleChange(): void {
    this.title$.pipe(tap(() => this.titleInputText = ''),takeUntilDestroyed(this.destroyRef)).subscribe()
  }
}
