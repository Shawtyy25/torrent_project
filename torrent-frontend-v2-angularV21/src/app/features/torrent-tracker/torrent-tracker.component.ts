import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {Tag} from 'primeng/tag';
import {Button} from 'primeng/button';
import {DataView} from 'primeng/dataview';
import {TorrentTypeModel} from '../../core/models/torrent-type.model';
import {TorrentAPIService} from '../../core/services/torrent-api.service';
import {TorrentCategoryPipe} from '../../shared/pipes/torrent-category-pipe';

@Component({
  selector: 'app-torrent-tracker',
  imports: [
    Button,
    DataView,
    Tag,
    TorrentCategoryPipe
  ],
  templateUrl: "./torrent-tracker.component.html",
  styleUrl: './torrent-tracker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TorrentTrackerComponent {
  protected readonly torrentApi = inject(TorrentAPIService);

  protected readonly torrents = computed((): TorrentTypeModel[] => this.torrentApi.results());
}
