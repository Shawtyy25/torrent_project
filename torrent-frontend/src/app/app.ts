import { Component, signal } from '@angular/core';
import {MainSearchbar} from './components/main-searchbar/main-searchbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    MainSearchbar
  ],
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('torrent-frontend');
}
