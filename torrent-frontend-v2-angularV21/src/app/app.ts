import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Header} from './layout/header/header';
import {TorrentTrackerContainer} from './layout/torrent-tracker-container/torrent-tracker-container';
import {InputStateService} from './core/services/input-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Header,
    TorrentTrackerContainer
  ],
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly inputState = inject(InputStateService);
}
