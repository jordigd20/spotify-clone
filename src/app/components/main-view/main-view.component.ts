import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [],
  templateUrl: './main-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {
  layoutService = inject(LayoutService);
}
