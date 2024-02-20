import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from '@angular/core';
import { Options, NgxSliderModule, ChangeContext } from 'ngx-slider-v2';
import { AudioService } from '../../services/audio.service';
import { CommonModule } from '@angular/common';
import { FloorPipe } from '../../pipes/floor.pipe';
import { BreakpointObserver, LayoutModule } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { BtnRandomModeComponent } from '../buttons/btn-random-mode/btn-random-mode.component';
import { BtnMuteComponent } from '../buttons/btn-mute/btn-mute.component';
import { BtnPlayComponent } from '../buttons/btn-play/btn-play.component';
import { BtnQueueComponent } from '../buttons/btn-queue/btn-queue.component';
import { DetailSongService } from '../../services/detail-song.service';

@Component({
  selector: 'app-playing-bar',
  standalone: true,
  imports: [
    CommonModule,
    FloorPipe,
    NgxSliderModule,
    LayoutModule,
    BtnPlayComponent,
    BtnRandomModeComponent,
    BtnMuteComponent,
    BtnQueueComponent,
  ],
  templateUrl: './playing-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayingBarComponent {
  audioService = inject(AudioService);
  changeDetectorRef = inject(ChangeDetectorRef);
  breakpointObserver = inject(BreakpointObserver);
  detailSong = inject(DetailSongService);

  value: number = 0;
  valueMobile: number = 0;
  isUserDragging = signal(false);
  isSmallScreen = signal(false);
  destroy$ = new Subject<void>();

  options: Options = {
    floor: 0,
    ceil: 250,
    disabled: true,
  };

  volumeOptions: Options = {
    floor: 0,
    ceil: 1,
    step: 0.01,
  };

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 640px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.matches) {
          this.isSmallScreen.set(true);
        }
      });

    this.audioService.currentSong$
      .pipe(takeUntil(this.destroy$))
      .subscribe((song) => {
        const newOptions: Options = Object.assign({}, this.options);
        newOptions.ceil = song.durationInSeconds;
        newOptions.disabled = false;
        this.options = newOptions;
        this.changeDetectorRef.markForCheck();
      });

    this.audioService.songProgress$
      .pipe(takeUntil(this.destroy$))
      .subscribe((progress) => {
        if (!this.isUserDragging()) {
          const newOptions: Options = Object.assign({}, this.options);
          newOptions.disabled = false;
          this.options = newOptions;
          this.value = progress;
          this.valueMobile = progress;
          this.changeDetectorRef.markForCheck();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onUserChangeEnd(event: ChangeContext) {
    this.isUserDragging.set(false);
    this.audioService.updateCurrentTime(event.value);
  }
}
