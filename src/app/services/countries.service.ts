import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl = 'https://6oaerp.6oa.edu.eg/api/';

  constructor(private http:HttpClient) { }

  getCountries(): Observable<Country> {
    return this.http.post<Country>(this.baseUrl + 'erp/countries/get_countries', {})
  }

}
