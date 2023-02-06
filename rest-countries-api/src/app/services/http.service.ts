import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public item: any;
  public itemObtained = new Subject();

  constructor(
    public http: HttpClient,
  ) { }

  public getCountries(url: string) {
    this.http.get(url).subscribe((data) => {
      this.itemObtained.next(this.item = data);
    });
  }
}
