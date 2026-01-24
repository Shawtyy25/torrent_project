import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private jackettUrl = 'http://localhost:9117';
  private jackettApiKey = '9qvua6rjuw9wao16d3ific0je2afh6a6';

  constructor(private readonly httpService: HttpService) {}

  getHello(): string {
    return 'Működik a torrent backend!';
  }


  async search(query: string) {
    console.log(`Keresés Jackettben: ${query}`);

    const url: string = `${this.jackettUrl}/api/v2.0/indexers/all/results/torznab`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          params: {
            apiKey: this.jackettApiKey,
            t: 'search',
            q: query,
          },
        }),
      );

      const jsonUrl = `${this.jackettUrl}/api/v2.0/indexers/all/results`;
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

      return results.map((item: any) => ({
        title: item.Title,
        size: item.Size,
        seeds: item.Seeders,
        peers: item.Peers,
        magnet: item.MagnetUri || item.Link,
        provider: item.Tracker,
        publishDate: item.PublishDate,
      }));
    } catch (e) {
      console.error('Hiba a Jackett hívásakor: ', e);
      return [];
    }
  }
}
