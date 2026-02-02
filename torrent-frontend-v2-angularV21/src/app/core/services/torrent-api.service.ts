import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TorrentTypeModel} from '../models/torrent-type.model';

@Injectable({
  providedIn: 'root',
})
export class TorrentAPIService {
  private http = inject(HttpClient);

  results = signal<TorrentTypeModel[]>([]);
  loading = signal<boolean>(false);

  searchTorrents(query: string) {
    this.loading.set(true);

    return this.http.get<TorrentTypeModel[]>(`http://localhost:3000/search?q=${query}`).subscribe({
      next: (data) => {
        this.results.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.loading.set(false);
      }
    });
  }
}
