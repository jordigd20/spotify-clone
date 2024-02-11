import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { Song } from '../../lib/data';

@Component({
  selector: 'app-songs-table',
  standalone: true,
  imports: [],
  templateUrl: './songs-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongsTableComponent implements OnChanges {
  @ViewChild('tableContainer')
  tableContainer!: ElementRef<HTMLDivElement>;

  @Input({ required: true }) songs: Song[] = [];
  @Output() tableHeight = new EventEmitter<number>();

  ngOnChanges() {
    this.tableHeight.emit((64.5 * this.songs.length) + 44);
  }
}
