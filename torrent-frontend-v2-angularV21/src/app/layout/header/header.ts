import {ChangeDetectionStrategy, Component, DestroyRef, inject, signal} from '@angular/core';
import {PcHeader} from '../pc-layout/pc-header/pc-header';
import {InputStateService} from '../../core/services/input-state.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    PcHeader,
    NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly destroyRef = inject(DestroyRef);
  protected readonly inputState = inject(InputStateService);

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
