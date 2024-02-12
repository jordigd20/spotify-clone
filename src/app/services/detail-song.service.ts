import { Injectable, signal } from '@angular/core';
import { Song } from '../lib/data';

@Injectable({
  providedIn: 'root',
})
export class DetailSongService {
  constructor() {}

  isDetailOpened = signal(false);
  songSelected = signal<Song | null>(null);

  openDetail(song: Song) {
    this.isDetailOpened.set(true);
    this.songSelected.set(song);
  }

  changeSongSelected(song: Song) {
    this.songSelected.set(song);
  }

  closeDetail() {
    this.songSelected.set(null);
    this.isDetailOpened.set(false);
  }
}
