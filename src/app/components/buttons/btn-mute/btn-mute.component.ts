import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-btn-mute',
  standalone: true,
  imports: [],
  templateUrl: './btn-mute.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnMuteComponent {
  @Input({ required: true }) isMuted = false;
  @Input({ required: true }) volume = 0;
  @Output() toggle = new EventEmitter<void>();
}
