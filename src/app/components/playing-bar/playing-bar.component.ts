import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Song, songs } from '../../lib/data';
import { Options, NgxSliderModule } from 'ngx-slider-v2';

@Component({
  selector: 'app-playing-bar',
  standalone: true,
  imports: [NgxSliderModule],
  templateUrl: './playing-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayingBarComponent {
  currentSong: Song = songs[12];
  value: number = 50;
  valueMobile: number = 50;
  volume: number = 50;

  options: Options = {
    floor: 0,
    ceil: 100,
  };
}
