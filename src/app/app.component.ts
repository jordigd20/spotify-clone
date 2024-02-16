import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingBarComponent } from './components/playing-bar/playing-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify-clone';
}
