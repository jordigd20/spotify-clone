import { Injectable, computed, signal } from '@angular/core';
import { Song } from '../lib/data';

interface DetailSongState {
  isDetailOpened: boolean;
  songSelected: Song | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class DetailSongService {
  constructor() {}

  private detailSongState = signal<DetailSongState>({
    isDetailOpened: false,
    songSelected: undefined,
  });

  isDetailOpened = computed(() => this.detailSongState().isDetailOpened);
  songSelected = computed(() => this.detailSongState().songSelected);

  openDetail(song: Song) {
    this.detailSongState.update((state) => ({
      ...state,
      isDetailOpened: true,
      songSelected: song,
    }));
  }

  updateSong(song: Song) {
    this.detailSongState.update((state) => ({
      ...state,
      songSelected: song,
    }));
  }

  closeDetail() {
    this.detailSongState.update((state) => ({
      ...state,
      isDetailOpened: false,
    }));
  }
}
