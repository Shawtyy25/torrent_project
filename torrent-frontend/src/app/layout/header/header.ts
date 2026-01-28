import {Component, DestroyRef, HostListener, inject, signal} from '@angular/core';
import {MainSearchbar} from '../../shared/components/main-searchbar/main-searchbar';
import {NgClass} from '@angular/common';
import {PcHeader} from '../pc-layout/pc-header/pc-header';
import {InputStateService} from '../../core/services/input-state.service';

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
    PcHeader
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly destroyRef = inject(DestroyRef);
  inputState = inject(InputStateService);

  isMobileVersion = signal(false);

  constructor() {
    const mql = window.matchMedia('(max-width: 1000px)');

    const apply = () => {
      this.isMobileVersion.set(mql.matches);
    };

    apply();

    const handler = () => apply();
    mql.addEventListener('change', handler);

    this.destroyRef.onDestroy(() => {
      mql.removeEventListener('change', handler);
    });
  }
}
