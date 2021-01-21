import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DomovService {

  constructor(private http: HttpClient) { }
  rootURL = 'api';


  getDatumData(datum: Date): Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().append('datum', datum.toDateString());

    return this.http.get<{}>(this.rootURL + '/date/staff', {headers, params});
  }

  getMesecData(leto, mesec) {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams({fromObject: {leto, mesec}});

    return this.http.get<{}>(this.rootURL + '/leto/mesec', {headers, params});
  }
  
}
