import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inquiry } from '../models/inquiry';

@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  baseUrl = 'https://6oaerp.6oa.edu.eg/api/';

  constructor(private Http: HttpClient) { }

  Inquiry(inquiry: Inquiry) {
    return this.Http.post(this.baseUrl + 'erp/socials/inquiry', inquiry)
  }
}
