import { Pipe, PipeTransform } from '@angular/core';
import { Playlist } from '../lib/data';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: Playlist[], searchText: string): Playlist[] {
    if (!value) {
      return [];
    }

    if (!searchText) {
      return value;
    }

    searchText = searchText.toLowerCase();

    return value.filter((playlist) => {
      const foundTitle = playlist.title.toLowerCase().includes(searchText);

      if (!foundTitle) {
        return playlist.artists.some((artist) =>
          artist.toLowerCase().includes(searchText),
        );
      }

      return foundTitle;
    });
  }
}
