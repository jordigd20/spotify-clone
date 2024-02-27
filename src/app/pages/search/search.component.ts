import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { PlaylistCardComponent } from '../../components/playlist-card/playlist-card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { playlists, morePlaylists } from '../../lib/data';
import { SearchPipe } from '../../pipes/search.pipe';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [RouterLink, FormsModule, PlaylistCardComponent, SearchPipe],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'main-view relative w-full rounded-md h-content overflow-y-auto bg-background',
  },
})
export class SearchComponent {
  location = inject(Location);
  activeRoute = inject(ActivatedRoute);
  router = inject(Router);

  searchText = signal('');
  playlists = [...playlists, ...morePlaylists];
  destroy$ = new Subject<void>();

  ngOnInit() {
    this.activeRoute.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.searchText.set(params['q'] ?? '');
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get navigationState() {
    return (this.location.getState() as any)['navigationId'] ?? 0;
  }

  navigateBack() {
    if (this.navigationState > 1) this.location.back();
  }

  navigateHome() {
    this.router.navigate(['/']);
  }

  handleSearch(searchBar: HTMLInputElement) {
    this.router.navigate(['/search'], {
      relativeTo: this.activeRoute,
      queryParams: { q: searchBar.value },
    });
  }

  resetSearch() {
    this.searchText.set('');
  }
}
