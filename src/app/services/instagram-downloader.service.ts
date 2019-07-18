import {Injectable} from '@angular/core';
import {InstagramCard} from './InstagramCard';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstagramDownloaderService {

  private PHOTOS = 'photos';
  private PROFILE = 'profile';

  constructor(private http: HttpClient) {
  }

  public getPhoto(id: string): Observable<string> {
    return this.http.get<string>(`${environment.instagramDownloadApiBaseUrl}/${this.PHOTOS}/${id}`);
  }

  public getProfile(username: string): Observable<InstagramCard[]> {
    return this.http.get<InstagramCard[]>(`${environment.instagramDownloadApiBaseUrl}/${this.PROFILE}/${username}`);
  }
}
