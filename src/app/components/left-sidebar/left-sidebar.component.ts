import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Playlist, playlists } from '../../lib/data';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './left-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSidebarComponent {
  audioService = inject(AudioService);

  playlists: Playlist[] = playlists;
}
