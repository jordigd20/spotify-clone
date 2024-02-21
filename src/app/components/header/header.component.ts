import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  location = inject(Location);
  router = inject(Router);

  get navigationState() {
    return (this.location.getState() as any)['navigationId'] ?? 0;
  }

  navigateBack() {
    if (this.navigationState > 1) this.location.back();
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
