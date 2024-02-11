import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LeftSidebarComponent } from '../../components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../../components/right-sidebar/right-sidebar.component';
import { PlayingBarComponent } from '../../components/playing-bar/playing-bar.component';
import { LayoutService } from '../../services/layout.service';
import { PlaylistDetailComponent } from '../../components/playlist-detail/playlist-detail.component';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [
    CommonModule,
    LeftSidebarComponent,
    RightSidebarComponent,
    PlayingBarComponent,
    PlaylistDetailComponent
  ],
  templateUrl: './playlist.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistComponent {
  layoutService = inject(LayoutService);
}
