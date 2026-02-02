import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FilterComponent} from '../../features/filter/filter.component';
import {TorrentTrackerComponent} from '../../features/torrent-tracker/torrent-tracker.component';

@Component({
  selector: 'app-torrent-tracker-container',
  imports: [
    FilterComponent,
    TorrentTrackerComponent
  ],
  templateUrl: './torrent-tracker-container.html',
  styleUrl: './torrent-tracker-container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TorrentTrackerContainer {

}
