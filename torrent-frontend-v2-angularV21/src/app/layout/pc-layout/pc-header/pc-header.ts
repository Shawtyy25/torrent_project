import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {MainSearchbar} from '../../../shared/components/main-searchbar/main-searchbar';
import {Avatar} from 'primeng/avatar';
import {InputStateService} from '../../../core/services/input-state.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pc-header',
  imports: [
    MainSearchbar,
    Avatar,
    NgClass
  ],
  templateUrl: './pc-header.html',
  styleUrl: './pc-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PcHeader {
  protected readonly inputState = inject(InputStateService);



}
