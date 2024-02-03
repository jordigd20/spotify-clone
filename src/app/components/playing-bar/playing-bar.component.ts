import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-playing-bar',
  standalone: true,
  imports: [],
  templateUrl: './playing-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayingBarComponent {

}
