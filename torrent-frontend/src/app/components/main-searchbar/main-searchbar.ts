import { Component } from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {IconField} from 'primeng/iconfield';
import {InputIcon} from 'primeng/inputicon';


@Component({
  selector: 'app-main-searchbar',
  imports: [
    InputText,
    FormsModule,
    IconField,
    InputIcon
  ],
  templateUrl: './main-searchbar.html',
  styleUrl: './main-searchbar.scss',
})
export class MainSearchbar {
  searchInput: string = "";
}
