import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

export interface TorrentItem {
  title: string;
  size: number;
  seeds: number;
  peers: number;
  magnet: string;
  provider: string;
  publishDate: string;
  category: number;
}


@Injectable()
export class AppService {
  private jackettUrl = 'http://localhost:9117';
  private jackettApiKey = '9qvua6rjuw9wao16d3ific0je2afh6a6';
  private categories: string[] = [];

  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Működik a torrent backend!';
  }

  async search(query: string) {
    console.log(`Keresés Jackettben: ${query}`);

    /*----------------------------------------------------------------------*/
    /* ---------------------- JSON VÉGPONT MEGHÍVÁSA ----------------------*/
    /*----------------------------------------------------------------------*/
    const jsonUrl = `${this.jackettUrl}/api/v2.0/indexers/all/results`;

    try {
      const jsonResponse = await firstValueFrom(
        this.httpService.get(jsonUrl, {
          params: {
            apikey: this.jackettApiKey,
            Query: query,
          },
        }),
      );

      const results = jsonResponse.data.Results;
      console.log(`Találatok száma: ${results.length}`);

      const torrents: TorrentItem[] = results.map((item: any) => ({
        title: item.Title,
        size: item.Size,
        seeds: item.Seeders,
        peers: item.Peers,
        magnet: item.MagnetUri || item.Link,
        provider: item.Tracker,
        publishDate: item.PublishDate,
        category: Array.isArray(item.Category)
          ? item.Category[0]
          : item.Category,
      }));

      this.categories = this.generateCategories(torrents);

      return torrents;
    } catch (e) {
      console.error('Hiba a Jackett hívásakor: ', e);
      return [];
    }
  }

  /* -------- KATEGÓRIÁK LEKÉRÉSE ------------- */
  getAvailableCategories() {
    return this.categories;
  }

  /* ------------ SEGÉD FÜGGVÉNYEK ------------ */
  private generateCategories(data: TorrentItem[]): string[] {
    const uniqueCategoryNames = new Set<string>();
    console.log(data);

    data.forEach((torrentItem) => {
      const categoryName = this.transformCategoryToName(torrentItem.category);
      uniqueCategoryNames.add(categoryName);
    });

    return Array.from(uniqueCategoryNames).sort();
  }

  /* ---------------- KATEGÓRIA ÁTALAKÍTÁSA ---------------------- */
  private transformCategoryToName(value: any): string {
    let catId = Number(value);
    if (!catId || isNaN(catId)) return 'Other';

    switch (true) {
      case catId >= 2000 && catId < 3000:
        return 'Movie';
      case catId >= 5000 && catId < 6000:
        return 'TV Show';

      case catId >= 1000 && catId < 2000:
      case catId === 8000:
        return 'Game';

      case catId >= 3000 && catId < 4000:
        return 'Music';
      case catId >= 6000 && catId < 7000:
        return 'XXX';
      case catId >= 4000 && catId < 5000:
        return 'Book';

      default:
        return 'Other';
    }
  }
}
