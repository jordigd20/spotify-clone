import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSidebarComponent {}
