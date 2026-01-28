import { Pipe, PipeTransform } from '@angular/core';
import {TorrentCategoryPipe} from './torrent-category-pipe';

@Pipe({
  name: 'torrentIcon'
})
export class TorrentIconPipe implements PipeTransform {
  private torrentPipe = new TorrentCategoryPipe();

  transform(value: number): string {
    const categoryName = this.torrentPipe.transform(value);

    const icons: Record<string, string> = {
      'Movie': 'pi pi-video',
      'TV Show': 'pi pi-desktop',
      'Music': 'pi pi-headphones',
      'Book': 'pi pi-book',
      'XXX': 'pi pi-venus',
      'Game': 'pi pi-discord',
      'Other': 'pi pi-file-arrow-up'
    }

    return icons[categoryName] || 'pi pi-file-arrow-up';
  }

}
