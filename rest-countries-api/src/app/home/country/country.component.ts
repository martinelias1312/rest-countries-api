import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  public countries: any;
  private countriesSubscription: Subscription;

  constructor(
    public httpService: HttpService
  ) { 
    this.countriesSubscription = this.httpService.itemObtained.subscribe((data: any) => {
      this.countries = data;
      console.log(this.countries);
    });
    this.httpService.getCountries('https://restcountries.com/v3.1/all');
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.countriesSubscription.unsubscribe();
  }
}
