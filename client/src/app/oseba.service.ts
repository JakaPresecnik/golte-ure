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

  calcNedeljske(st: Date, en: Date) {
    if(new Date(st).getDay() === 0 && new Date(en).getDay() === 0){
      return this.calcSkupaj(st, en);
    }else if(new Date(st).getDay() === 0) {
      let nextDay = new Date(st);
          nextDay = new Date(nextDay.setDate(nextDay.getDate() + 1));
      let end = new Date(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate());
      return this.calcSkupaj(st, end);
    }else if(new Date(en).getDay() === 0) {
      let start = new Date(en.getFullYear(), en.getMonth(), en.getDate());
      return this.calcSkupaj(start, en);
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
