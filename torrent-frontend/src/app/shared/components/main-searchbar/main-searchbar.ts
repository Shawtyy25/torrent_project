import {Component, inject, output, Output, signal} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {NgClass} from '@angular/common';
import {InputStateService} from '../../../core/services/input-state.service';
import {TorrentAPIService} from '../../../core/services/torrent-api.service';


@Component({
  selector: 'app-main-searchbar',
  imports: [
    InputText,
    FormsModule,
    IconField,
    InputIcon,
    NgClass
  ],
  templateUrl: './main-searchbar.html',
  styleUrl: './main-searchbar.scss',
})
export class MainSearchbar {
  inputState: InputStateService = inject(InputStateService);
  torrentFetch: TorrentAPIService = inject(TorrentAPIService);

  searchInput: string = "";

  onSearch() {
    if (this.searchInput.trim()){
      this.inputState.performSearch(this.searchInput);
      this.torrentFetch.searchTorrents(this.searchInput);
    }

  }
}
