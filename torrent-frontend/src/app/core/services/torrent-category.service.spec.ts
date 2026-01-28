import { TestBed } from '@angular/core/testing';

import { TorrentCategoryService } from './torrent-category.service';

describe('TorrentCategoryService', () => {
  let service: TorrentCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorrentCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
