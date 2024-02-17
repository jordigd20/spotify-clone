import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingBarComponent } from './components/playing-bar/playing-bar.component';
import { DetailSongService } from './services/detail-song.service';
import { CommonModule } from '@angular/common';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LeftSidebarComponent,
    RightSidebarComponent,
    PlayingBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  detailSong = inject(DetailSongService);
  title = 'spotify-clone';
}
