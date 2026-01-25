import {Component, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {MainSearchbar} from '../../main-searchbar/main-searchbar';

@Component({
  selector: 'app-pc-header',
  imports: [
    NgClass,
    MainSearchbar
  ],
  templateUrl: './pc-header.html',
  styleUrl: './pc-header.scss',
})
export class PcHeader {
  hasSearched = signal(false);

}
