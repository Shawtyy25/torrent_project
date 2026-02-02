import {TorrentCategoryEnum} from './torrent-category.enum';

export interface TorrentTypeModel {
  title: string,
  size: number,
  seeds: number,
  peers: number,
  magnet: string,
  provider: string,
  publishDate: string,
  category: TorrentCategoryEnum
}
