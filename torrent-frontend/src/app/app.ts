import {Component, inject, signal} from '@angular/core';
import {MainSearchbar} from './shared/components/main-searchbar/main-searchbar';
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
  styleUrl: './app.scss'
})
export class App {
  inputState = inject(InputStateService);


}
