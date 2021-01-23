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
    const headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams().append('datum', datum.toDateString());

    return this.http.get<{}>(this.rootURL + '/date/staff', {headers, params});
  }

  getMesecData(leto, mesec): Observable<any> {
    const headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    const params = new HttpParams({fromObject: {leto, mesec}});

    return this.http.get<{}>(this.rootURL + '/leto/mesec', {headers, params});
  }
  postDanData(emso, dan, data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {emso, dan, data};

    this.http.post(this.rootURL + '/date/post', body, {'headers': headers})
    .subscribe(data => {
      console.log(data);
    });
  }
  putDanData(emso, dan, data) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {emso, dan, data};
    
    this.http.put(this.rootURL + '/date/update', body, {'headers': headers})
    .subscribe(data => {
      console.log(data);
    });
  }
  
}
