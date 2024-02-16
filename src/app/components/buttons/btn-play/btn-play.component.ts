import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Song } from '../../../lib/data';

@Component({
  selector: 'app-btn-play',
  standalone: true,
  imports: [],
  templateUrl: './btn-play.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnPlayComponent {
  @Input({ required: true }) isPlaying = false;
  @Input({ required: true }) currentSong: Song | undefined;
  @Output() play = new EventEmitter<void>();
  @Output() pause = new EventEmitter<void>();
}
