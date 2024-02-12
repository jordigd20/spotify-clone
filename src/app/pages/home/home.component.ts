import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LeftSidebarComponent } from '../../components/left-sidebar/left-sidebar.component';
import { MainViewComponent } from '../../components/main-view/main-view.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { PlayingBarComponent } from '../../components/playing-bar/playing-bar.component';
import { DetailSongService } from '../../services/detail-song.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LeftSidebarComponent,
    MainViewComponent,
    RightSidebarComponent,
    PlayingBarComponent,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  detailSong = inject(DetailSongService);
}
