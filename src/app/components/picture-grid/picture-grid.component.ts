import {Component, OnInit} from '@angular/core';
import {InstagramDownloaderService} from '../../services/instagram-downloader.service';
import {InstagramCard} from '../../services/InstagramCard';

@Component({
  selector: 'app-picture-grid',
  templateUrl: './picture-grid.component.html',
  styleUrls: ['./picture-grid.component.css']
})
export class PictureGridComponent implements OnInit {

  photo: string;
  photoList: InstagramCard[];

  constructor(private instagramDownloaderService: InstagramDownloaderService) {
  }

  ngOnInit() {
    this.instagramDownloaderService.pictureLoaded$.subscribe(value => {
      this.photoList = null;
      this.photo = value;
    });

    this.instagramDownloaderService.profilePicturesLoaded$.subscribe(value => {
      this.photo = null;
      this.photoList = value;
    });
  }

}
