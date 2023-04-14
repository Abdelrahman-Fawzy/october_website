import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'https://6oaerp.6oa.edu.eg/api/';

  constructor(private http: HttpClient) { }

  Register(model: Register) {
    return this.http.post(this.baseUrl + 'erp/socials/register_with_us', model)
  }
}
