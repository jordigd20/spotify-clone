import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Playlist } from '../../lib/data';

@Component({
  selector: 'app-playlist-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './playlist-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistCardComponent {
  @Input({ required: true }) playlist!: Playlist;
}
