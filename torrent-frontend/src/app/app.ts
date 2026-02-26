import {Component, inject, signal} from '@angular/core';
import {MainSearchbar} from './shared/components/main-searchbar/main-searchbar';
import {Header} from './layout/header/header';
import {TorrentTrackerContainer} from './layout/torrent-tracker-container/torrent-tracker-container';
import {InputStateService} from './core/services/input-state.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    Header,
    TorrentTrackerContainer,
    FormsModule
  ],
  styleUrl: './app.scss'
})
export class App {
  inputState = inject(InputStateService);


}
