import {Component, output, Output, signal} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';
import {NgClass} from '@angular/common';


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
  searchInput: string = "";
  searchTriggeredOutput = output<boolean>();
  searchTriggered = signal(false);

  onSearch() {
    if (this.searchInput.trim()){
      this.searchTriggeredOutput.emit(true);
      this.searchTriggered.set(true);
    }

  }
}
