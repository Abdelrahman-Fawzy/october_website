import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Certificate } from '../models/certificate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  baseUrl = 'https://6oaerp.6oa.edu.eg/api/';

  constructor(private http:HttpClient) { }

  getCertificates(): Observable<Certificate> {
    return this.http.post<Certificate>(this.baseUrl + 'erp/certificates/get_certificates', {})
  }
}
