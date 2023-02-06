import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryDetailModule } from './country-detail/country-detail.module';
import { HomeModule } from './home/home.module';
import { HttpService } from './services/http.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CountryDetailModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
  exports: [SharedModule]
})
export class AppModule { }
