import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorrentTrackerComponent } from './torrent-tracker.component';

describe('TorrentTrackerComponent', () => {
  let component: TorrentTrackerComponent;
  let fixture: ComponentFixture<TorrentTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorrentTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TorrentTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
