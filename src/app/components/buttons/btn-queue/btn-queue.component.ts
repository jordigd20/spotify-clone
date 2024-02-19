import { CommonModule, Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-btn-queue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-queue.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnQueueComponent {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);

  currentRoute = signal('');
  destroy$ = new Subject<void>();

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        const activeRoute = this.activatedRoute.root.firstChild;

        if (activeRoute) {
          this.currentRoute.set(activeRoute.snapshot.routeConfig?.path ?? '');
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  navigateBack() {
    const navigationState =
      (this.location.getState() as any)['navigationId'] ?? 0;

    if (navigationState > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  navigateToQueue() {
    this.router.navigate(['/queue']);
  }
}
