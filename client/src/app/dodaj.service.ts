import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DodajService {
  rootURL = 'api';

  constructor(private http: HttpClient) { }

  postOseba(osData: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
     let body = {emso: osData.emso, ime: osData.ime};

    this.http.post(this.rootURL + '/dodaj', body, {'headers': headers})
    .subscribe(data => {
      console.log(data);
    });
  }
}
