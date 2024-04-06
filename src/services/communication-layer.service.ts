import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationLayerService {
  private readonly defaultTitle = 'Default title';

  private readonly titleChangeSubject = new BehaviorSubject(this.defaultTitle);
  readonly title$ = this.titleChangeSubject.asObservable();

  changeTitle(newTitle: string): void {
    this.titleChangeSubject.next(newTitle);
  }

  resetTitle(): void {
    this.titleChangeSubject.next(this.defaultTitle);
  }
}
