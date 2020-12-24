import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DomovService {
  constructor(private http: HttpClient) { }
  rootURL = 'api'

  getOsebje(): Observable<any[]> {
    return this.http.get<any[]>(this.rootURL + '/staff');
  };

  getDatumData(datum: Date): Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    headers.append('datum', datum.toDateString());
    let params = new HttpParams().append('datum', datum.toDateString());

    return this.http.get<{}>(this.rootURL + '/date', {headers, params});
  }
  
}
