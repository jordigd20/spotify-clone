import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DetailSongService } from '../../services/detail-song.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './right-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightSidebarComponent {
  detailSong = inject(DetailSongService);
}
