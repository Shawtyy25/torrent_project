import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentTrackerContainer } from './torrent-tracker-container';

describe('TorrentTrackerContainer', () => {
  let component: TorrentTrackerContainer;
  let fixture: ComponentFixture<TorrentTrackerContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorrentTrackerContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrentTrackerContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
