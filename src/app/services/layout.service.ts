import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  constructor() {}

  isDetailOpened = signal(false);

  openDetail() {
    this.isDetailOpened.set(true);
  }

  closeDetail() {
    this.isDetailOpened.set(false);
  }

  toggleDetail() {
    this.isDetailOpened.update((value) => !value);
  }
}
