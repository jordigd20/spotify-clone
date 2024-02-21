import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SongsTableComponent } from '../../components/songs-table/songs-table.component';
import { AudioService } from '../../services/audio.service';
import { DetailSongService } from '../../services/detail-song.service';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [CommonModule, SongsTableComponent, HeaderComponent],
  templateUrl: './queue.component.html',
  host: {
    class:
      'main-view relative w-full rounded-md h-content overflow-y-auto bg-background',
  },
})
export class QueueComponent {
  audioService = inject(AudioService);
  detailSong = inject(DetailSongService);
}
