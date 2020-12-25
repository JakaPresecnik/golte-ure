import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OsebaService {
  calcSkupaj(startDate: Date, endDate: Date, startDva?: Date, endDva?: Date) {
    let dva = endDva && startDva;
    let diff = endDate.getTime() - startDate.getTime();
    let diffDva = dva ? (endDva.getTime() - startDva.getTime()) + diff : null;
    let hours: number = diff / (60 * 60 * 1000);
    let hoursDva: number = diffDva / (60 * 60 * 1000);

    if (diffDva > 0) {
      return hoursDva;
    }else {
      return hours;
    }
  }

  calcNocne(sD: Date, eD: Date) {
    let ura: number = sD.getHours();
    let minute: number = sD.getMinutes();
    let uraDo: number = eD.getHours();
    let minuteDo: number = eD.getMinutes();

    let dvaDni: boolean = !!(eD.getDate()-sD.getDate());

    let mNocna: number = 0;

    for(; ura < 25; ura++) {   
      if (ura > uraDo && !dvaDni) {  
        break;
      }else if(ura < 22 && ura > 6) {
        minute = 0;
        continue;
      }else if(minute !== 0){
        mNocna += minute; 
        minute = 0;
      }else if(minuteDo !== 0 && (uraDo >= 22 || uraDo < 6)) {
        mNocna += minuteDo; 
        minuteDo = 0;
      }else {
        mNocna += 60;
      }
      if(ura === 24) {
        ura = 1;
        dvaDni = !dvaDni;
      }
    }
    return mNocna;
  }

  constructor(private http: HttpClient) { }

  rootURL = 'api';

  getMesecOsebaData(leto, mesec, emso): Observable<any> {
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams({fromObject: {leto, mesec, emso}});

    return this.http.get<{}>(this.rootURL + '/mesec/emso', {headers, params});
  }
}
