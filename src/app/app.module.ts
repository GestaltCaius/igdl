import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InstagramDownloaderService} from './services/instagram-downloader.service';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { PictureGridComponent } from './components/picture-grid/picture-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    PictureGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [InstagramDownloaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
