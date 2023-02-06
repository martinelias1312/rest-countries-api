import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countries: any;
  private countriesSubscription: Subscription;

  constructor(
    public httpService: HttpService,
  ) { 
    this.countriesSubscription = this.httpService.itemObtained.subscribe((data: any) => {
      this.countries = data;
      console.log(this.countries);
    });
    this.httpService.getCountries('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags');
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.countriesSubscription.unsubscribe();
  }

  public onSearchFormSubmit(): void {
    
  }

}
