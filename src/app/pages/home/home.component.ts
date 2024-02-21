import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Playlist, morePlaylists, playlists } from '../../lib/data';
import { RouterLink } from '@angular/router';
import { PlaylistCardComponent } from '../../components/playlist-card/playlist-card.component';
import { AudioService } from '../../services/audio.service';

const DEFAULT_COLOR = '#0f6f32';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, PlaylistCardComponent],
  templateUrl: './home.component.html',
  host: {
    class:
      'main-view relative w-full bg-background rounded-md h-content overflow-y-auto',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  audioService = inject(AudioService);

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
