import { TestBed } from '@angular/core/testing';

import { DetailSongService } from './detail-song.service';

describe('DetailSongService', () => {
  let service: DetailSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
