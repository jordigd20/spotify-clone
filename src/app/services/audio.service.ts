import { Injectable, computed, inject, signal } from '@angular/core';
import { Playlist, Song, songs } from '../lib/data';
import { BehaviorSubject, Subject } from 'rxjs';
import { DetailSongService } from './detail-song.service';

interface AudioState {
  isPlaying: boolean;
  playlist: Playlist | undefined;
  currentSong: Song | undefined;
  intervalId: number | undefined;
  songsQueue: Song[];
  songsHistory: Song[];
  randomMode: boolean;
  isMuted: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private detailSong = inject(DetailSongService);

  private currentAudio = new Audio();
  private audioState = signal<AudioState>({
    isPlaying: false,
    playlist: undefined,
    currentSong: undefined,
    intervalId: undefined,
    songsQueue: [],
    songsHistory: [],
    randomMode: false,
    isMuted: false,
  });

  isPlaying = computed(() => this.audioState().isPlaying);
  playlist = computed(() => this.audioState().playlist);
  currentSong = computed(() => this.audioState().currentSong);
  intervalId = computed(() => this.audioState().intervalId);
  songsQueue = computed(() => this.audioState().songsQueue);
  songsHistory = computed(() => this.audioState().songsHistory);
  randomMode = computed(() => this.audioState().randomMode);
  isMuted = computed(() => this.audioState().isMuted);

  volumeDisplayed = 0.5;

  volume$ = new BehaviorSubject<number>(this.volumeDisplayed);
  songProgress$ = new Subject<number>();
  currentSong$ = new Subject<Song>();

  constructor() {
    const volume = localStorage.getItem('volume') ?? 0.5;
    const randomMode = localStorage.getItem('randomMode') ?? false;

    if (!isNaN(Number(volume)!) && Number(volume) >= 0 && Number(volume) <= 1) {
      this.updateVolume(Number(volume));
    }

    if (randomMode === 'true') {
      this.audioState.update((state) => ({ ...state, randomMode: true }));
    }

    this.volume$.subscribe((volume) => {
      this.currentAudio.volume = volume * 0.75;
      localStorage.setItem('volume', volume.toString());
    });

    this.currentSong$.subscribe((song) => {
      this.audioState.update((state) => ({ ...state, currentSong: song }));
    });
  }

  getSongsFromPlaylistId(playlistId: number): Song[] {
    return songs.filter((s) => s.playlistId === playlistId);
  }

  setPlaylist(playlist: Playlist) {
    if (
      this.playlist() != null &&
      this.currentSong() != null &&
      this.playlist()!.id === playlist.id
    ) {
      if (this.isPlaying()) {
        this.pause();
      } else {
        this.play();
      }

      return;
    }

    this.audioState.update((state) => ({
      ...state,
      playlist,
      songsHistory: [],
    }));

    if (this.randomMode()) {
      this.createRandomQueue(playlist);
    } else {
      this.createRegularQueue(playlist);
    }

    this.startPlayback();
  }

  async play() {
    try {
      await this.currentAudio.play();

      this.audioState.update((state) => ({
        ...state,
        isPlaying: true,
        intervalId: setInterval(this.updateSongInterval(), 1000),
      }));

      this.currentAudio.onended = () => {
        setTimeout(() => {
          this.startPlayback();
        }, 500);
      };
    } catch (error) {}
  }

  pause() {
    this.currentAudio.pause();
    this.audioState.update((state) => ({ ...state, isPlaying: false }));
    clearInterval(this.intervalId());
  }

  updateCurrentTime(time: number) {
    this.currentAudio.currentTime = time;
  }

  toggleMute() {
    const muted = !this.currentAudio.muted;
    this.currentAudio.muted = muted;
    this.audioState.update((state) => ({ ...state, isMuted: muted }));

    if (muted) {
      this.volumeDisplayed = 0;
    } else {
      this.volumeDisplayed = this.volume$.value;
    }
  }

  updateSongInterval(): TimerHandler {
    return () => {
      this.songProgress$.next(Math.floor(this.currentAudio.currentTime));
    };
  }

  updateVolume(volume: number) {
    if (volume < 0 || volume > 1) {
      return;
    }

    if (!this.isMuted()) {
      this.volumeDisplayed = volume;
      this.volume$.next(volume);
    }

    if (this.isMuted() && volume > 0) {
      this.currentAudio.muted = false;
      this.audioState.update((state) => ({ ...state, isMuted: false }));
      this.volumeDisplayed = volume;
      this.volume$.next(volume);
    }
  }

  toggleRandomMode() {
    this.audioState.update((state) => ({
      ...state,
      randomMode: !state.randomMode,
    }));
    localStorage.setItem('randomMode', this.randomMode().toString());

    if (
      this.playlist() == null ||
      this.currentSong() == null ||
      this.songsQueue().length === 0
    ) {
      return;
    }

    if (this.randomMode()) {
      this.randomizeCurrentQueue();
    } else {
      this.unrandomizeCurrentQueue();
    }
  }

  previousSong() {
    if (this.songsHistory().length < 2) {
      const song = this.songsHistory()[0];
      this.audioState.update((state) => ({
        ...state,
        songsHistory: state.songsHistory.slice(1),
        songsQueue: [song, ...state.songsQueue],
      }));

      this.startPlayback();
      return;
    }

    const currentSong = this.songsHistory()[0];
    const previousSong = this.songsHistory()[1];

    this.audioState.update((state) => ({
      ...state,
      songsHistory: state.songsHistory.slice(2),
      songsQueue: [previousSong, currentSong, ...state.songsQueue],
    }));

    this.startPlayback();
  }

  nextSong() {
    this.startPlayback();
  }

  private startPlayback() {
    if (this.playlist() == null) {
      return;
    }

    const song = this.songsQueue()[0];
    this.audioState.update((state) => ({
      ...state,
      songsQueue: state.songsQueue.slice(1),
    }));

    if (song) {
      this.currentSong$.next(song);
      this.currentAudio.src = song.audio;
      this.songProgress$.next(0);
      this.audioState.update((state) => ({
        ...state,
        songsHistory: [song, ...state.songsHistory],
      }));
      this.detailSong.updateSong(song);
      clearInterval(this.intervalId());
      this.play();
    } else {
      this.audioState.update((state) => ({
        ...state,
        playlist: undefined,
        currentSong: undefined,
      }));
      this.songProgress$.next(0);
      this.pause();
    }
  }

  private createRandomQueue(playlist: Playlist) {
    const songs = this.getSongsFromPlaylistId(playlist.id);
    this.audioState.update((state) => ({
      ...state,
      songsQueue: this.shuffle(songs),
    }));
  }

  private createRegularQueue(playlist: Playlist) {
    const songs = this.getSongsFromPlaylistId(playlist.id);
    this.audioState.update((state) => ({ ...state, songsQueue: songs }));
    console.log(this.songsQueue());
  }

  private randomizeCurrentQueue() {
    this.audioState.update((state) => ({
      ...state,
      songsQueue: this.shuffle(state.songsQueue),
    }));
    console.log(this.songsQueue());
  }

  private unrandomizeCurrentQueue() {
    const history = this.songsHistory();
    const playlistSongs = this.getSongsFromPlaylistId(this.playlist()!.id);

    this.audioState.update((state) => ({
      ...state,
      songsQueue: playlistSongs.filter((song) => !history.includes(song)),
    }));
    console.log(this.songsQueue());
  }

  private shuffle(songs: Song[]): Song[] {
    for (let i = songs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }

    return songs;
  }
}
