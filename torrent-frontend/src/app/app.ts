import { Component, signal } from '@angular/core';
import {MainSearchbar} from './components/main-searchbar/main-searchbar';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    MainSearchbar,
    Header
  ],
  styleUrl: './app.scss'
})
export class App {
  hasSearched = signal(false);


}
