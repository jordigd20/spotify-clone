import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-btn-random-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-random-mode.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnRandomModeComponent {
  @Input({ required: true }) randomMode = false;
  @Output() toggle = new EventEmitter<void>();
}
