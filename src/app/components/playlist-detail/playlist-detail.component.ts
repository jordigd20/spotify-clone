import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { Playlist, Song, allPlaylists, songs } from '../../lib/data';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { SongsTableComponent } from '../songs-table/songs-table.component';

@Component({
  selector: 'app-playlist-detail',
  standalone: true,
  imports: [CommonModule, SongsTableComponent],
  templateUrl: './playlist-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistDetailComponent {
  @ViewChild('headerContainer', { static: true })
  headerContainer!: ElementRef<HTMLDivElement>;

  layoutService = inject(LayoutService);
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);
  location = inject(Location);

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
      const playlistId = params['id'];
      this.playlist.set(allPlaylists.find((p) => p.id === Number(playlistId)));

      if (!this.playlist()) {
        this.router.navigate(['/']);
        return;
      }

      this.bgColor.set(this.playlist()!.color.rgb);
      this.songs.set(songs.filter((s) => s.playlistId === Number(playlistId)));
      this.someArtists.set((this.playlist()?.artists || []).slice(0, 2));
      console.log(this.location.getState());
    });
  }

  ngAfterViewInit() {
    this.headerHeight.set(this.headerContainer.nativeElement.offsetHeight);
  }

  navigateBack() {
    if (this.navigationState > 1) this.location.back();
  }
}
