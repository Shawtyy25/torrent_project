import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {InputStateService} from '../../../core/services/input-state.service';
import {TorrentAPIService} from '../../../core/services/torrent-api.service';

@Component({
  selector: 'app-main-searchbar',
  imports: [
    InputText,
    FormsModule,
    IconField,
    InputIcon,
  ],
  templateUrl: './main-searchbar.html',
  styleUrl: './main-searchbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainSearchbar {
  protected readonly inputState = inject(InputStateService);
  protected readonly torrentFetch = inject(TorrentAPIService);

  searchInput = "";

  onSearch() {
    if (this.searchInput.trim()){
      this.inputState.performSearch(this.searchInput);
      this.torrentFetch.searchTorrents(this.searchInput);
    }
  }
}
