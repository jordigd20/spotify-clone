import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Playlist, playlists, morePlaylists } from '../../lib/data';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './left-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftSidebarComponent {
  playlists: Playlist[] = playlists;
}
