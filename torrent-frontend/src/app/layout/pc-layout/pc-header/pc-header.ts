import {Component, inject, signal} from '@angular/core';
import {NgClass} from '@angular/common';
import {MainSearchbar} from '../../../shared/components/main-searchbar/main-searchbar';
import {Avatar} from 'primeng/avatar';
import {InputStateService} from '../../../core/services/input-state.service';

@Component({
  selector: 'app-pc-header',
  imports: [
    NgClass,
    MainSearchbar,
    Avatar
  ],
  templateUrl: './pc-header.html',
  styleUrl: './pc-header.scss',
})
export class PcHeader {
  inputState = inject(InputStateService);

}
