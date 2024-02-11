import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'playlist/:id',
    loadComponent: () =>
      import('./pages/playlist/playlist.component').then(
        (m) => m.PlaylistComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full',
  }
];
