import { HttpClient } from '@angular/common/http';
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

  getDatumData(datum): Observable<any> {
    return this.http.get<{}>(this.rootURL + '/date');
  }
  
}
