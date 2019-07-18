import {Component, OnInit} from '@angular/core';
import {InstagramDownloaderService} from './services/instagram-downloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ig-save-front';

  constructor() {}

  ngOnInit(): void {
  }

}
