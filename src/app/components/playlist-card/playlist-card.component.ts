import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '../../lib/data';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistCardComponent {
  @Input({ required: true }) playlist!: Playlist;

  audioService = inject(AudioService);
}
