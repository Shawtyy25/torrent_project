import {Component, inject, OnInit, signal} from '@angular/core';
import {InputText} from 'primeng/inputtext';
import {TorrentCategoryService} from '../../core/services/torrent-category.service';


@Component({
  selector: 'app-filter',
  imports: [
    InputText
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit{
  categoryTService = inject(TorrentCategoryService);


  filterInput = signal<string>("");

  ngOnInit() {
    this.categoryTService.getCategories();
  }
}
