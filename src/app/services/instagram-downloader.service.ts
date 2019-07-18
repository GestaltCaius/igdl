import {Injectable} from '@angular/core';
import {InstagramCard} from './InstagramCard';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError} from 'rxjs/operators';

enum endpoints {
  PHOTOS = 'photos',
  PROFILE = 'profile',
}

@Injectable({
  providedIn: 'root'
})
export class InstagramDownloaderService {

  private profilePictures = new Subject<Array<InstagramCard>>();
  profilePicturesLoaded$ = this.profilePictures.asObservable();

  private picture = new Subject<string>();
  pictureLoaded$ = this.picture.asObservable();

  private loading = new Subject<boolean>();
  loadingStatus$ = this.loading.asObservable();

  constructor(private http: HttpClient) {
    this.loading.next(false); // default value
  }

  public getPhoto(id: string): void {
    this.loading.next(true);
    this.http.get<string>(`${environment.instagramDownloadApiBaseUrl}/${endpoints.PHOTOS}/${id}`)
      .subscribe(
        photo => {
          this.picture.next(photo);
          this.loading.next(false);
        },
        () => this.loading.next(false));
  }

  public getProfile(username: string): void {
    this.loading.next(true);
    this.http.get<InstagramCard[]>(`${environment.instagramDownloadApiBaseUrl}/${endpoints.PROFILE}/${username}`)
      .subscribe(
        photoList => {
          this.profilePictures.next(this.removeDuplicates(photoList, 'url'));
          this.loading.next(false);
        },
    () => this.loading.next(false));
  }

  private removeDuplicates(array: any[], prop: string) {
    return array.filter((item, index, arr) => {
      return arr.map(mapItem => mapItem[prop]).indexOf(item[prop]) === index;
    });
  }
}
