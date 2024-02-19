import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';
import { AudioService } from '../../services/audio.service';
import { DetailSongService } from '../../services/detail-song.service';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [CommonModule, SongsTableComponent],
  templateUrl: './queue.component.html',
  host: {
    class:
      'main-view relative w-full rounded-md h-content overflow-y-auto bg-background',
  },
})
export class QueueComponent {
  router = inject(Router);
  location = inject(Location);
  audioService = inject(AudioService);
  detailSong = inject(DetailSongService);

  get navigationState() {
    return (this.location.getState() as any)['navigationId'] ?? 0;
  }

  navigateBack() {
    if (this.navigationState > 1) this.location.back();
  }

  navigateHome() {
    this.router.navigate(['/']);
  }
}
