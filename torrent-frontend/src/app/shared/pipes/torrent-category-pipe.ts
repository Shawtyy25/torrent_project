import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'torrentCategory'
})
export class TorrentCategoryPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return 'Other';

    switch (true) {
      case (value >= 2000 && value < 3000):
        return 'Movie';
      case (value >= 5000 && value < 6000):
        return 'TV Show';
      case (value >= 3000 && value < 4000):
        return 'Music';
      case (value >= 4000 && value < 5000):
        return 'Book';
      case (value === 6000 && value < 7000):
        return 'XXX';
      case ((value === 1000 && value < 2000) || value === 8000):
        return 'Game';
      default:
        return 'Other';
    }
  }

}
