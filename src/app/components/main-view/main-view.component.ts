import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Playlist, playlists, morePlaylists } from '../../lib/data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

const DEFAULT_COLOR = '#0f6f32';

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainViewComponent {
  layoutService = inject(LayoutService);
  playlists: Playlist[] = playlists;
  madeForYou: Playlist[] = morePlaylists;
  gradientColor = signal(DEFAULT_COLOR);
  greetingsMessage = signal('');

  ngOnInit() {
    const date = new Date();
    const currentHour = date.getHours();

    if (currentHour < 12) {
      this.greetingsMessage.set('¡Good morning!');
    } else if (currentHour < 18) {
      this.greetingsMessage.set('¡Good afternoon!');
    } else {
      this.greetingsMessage.set('¡Good evening!');
    }
  }

  onPlaylistHover(playlist: Playlist | null) {
    if (!playlist) {
      this.gradientColor.set(DEFAULT_COLOR);
      return;
    }

    this.gradientColor.set(playlist.color.hex);
  }
}
