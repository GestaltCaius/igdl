import {Component, OnInit} from '@angular/core';
import {InstagramDownloaderService} from './services/instagram-downloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ig-save-front';

  images = [];

  constructor(private instagramDownloaderService: InstagramDownloaderService) {}

  ngOnInit(): void {
  }

  private removeDuplicates(array: any[], prop: string) {
    return array.filter((item, index, arr) => {
      return arr.map(mapItem => mapItem[prop]).indexOf(item[prop]) === index;
    });
  }

  search(value: string) {
    console.log('search clicked')
    this.instagramDownloaderService.getProfile(value).subscribe(list => {
      this.images = this.removeDuplicates(list, 'url');
    });
  }
}
