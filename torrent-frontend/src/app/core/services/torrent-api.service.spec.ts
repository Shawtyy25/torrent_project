import { TestBed } from '@angular/core/testing';

import { TorrentAPIService } from './torrent-api.service';

describe('TorrentAPIService', () => {
  let service: TorrentAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorrentAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
