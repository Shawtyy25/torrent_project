import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TorrentTypeModel} from '../models/torrent-type.model';
import {TorrentCategoryPipe} from '../../shared/pipes/torrent-category-pipe';

@Injectable({
  providedIn: 'root',
})
export class TorrentCategoryService {
  private http = inject(HttpClient);

  torrentCategories = signal<string[]>([]);
  private torrentCategoryPipe = new TorrentCategoryPipe();

  getCategories() {
    return this.http.get("http://localhost:3000/categories").subscribe({
      next: value => {
        if (!value) throw new Error('No data from server!');
        console.log(value)
      },
      error: err => {
        console.error(err);
        return [];
      }
    });
  }


  private setCategories(data: TorrentTypeModel[]): string[] {
    const uniqueCategoryNames = new Set<string>();

    data.map(torrentItem => {
      const categoryName = this.torrentCategoryPipe.transform(torrentItem.category);
      uniqueCategoryNames.add(categoryName);
    })

    return Array.from(uniqueCategoryNames).sort();
  }
}
