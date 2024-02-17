import { CommonModule, Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioService } from '../../services/audio.service';
import { Playlist, Song, allPlaylists } from '../../lib/data';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';


@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    CommonModule,
    SongsTableComponent
  ],
  templateUrl: './playlist.component.html',
  host: {
    class:
      'main-view relative w-full rounded-md h-content overflow-y-auto bg-background/30',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent {
  @ViewChild('headerContainer', { static: true })
  headerContainer!: ElementRef<HTMLDivElement>;

  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);
  audioService = inject(AudioService);

  playlist = signal<Playlist | undefined>(undefined);
  someArtists = signal<string[]>([]);
  songs = signal<Song[]>([]);
  tableHeight = signal(0);
  headerHeight = signal(0);
  bgColor = signal('200, 200, 200');

  get navigationState() {
    return (this.location.getState() as any)['navigationId'] ?? 0;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      const playlistId = Number(params['id']);
      this.playlist.set(allPlaylists.find((p) => p.id === playlistId));

      if (!this.playlist()) {
        this.router.navigate(['/']);
        return;
      }

      this.bgColor.set(this.playlist()!.color.rgb);
      this.songs.set(
        this.audioService.getSongsFromPlaylistId(this.playlist()!.id),
      );
      this.someArtists.set((this.playlist()?.artists || []).slice(0, 2));
    });
  }

  ngAfterViewInit() {
    this.headerHeight.set(this.headerContainer.nativeElement.offsetHeight);
  }

  navigateBack() {
    if (this.navigationState > 1) this.location.back();
  }
}
