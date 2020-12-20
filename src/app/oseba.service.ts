import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsebaService {
  getMesecData(m, y) {
    let mesecStr = ['Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 
    'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'];
    let days = new Date(y, m, 0).getDate();

    return {
      m: mesecStr[m-1],
      days: days
    }
  }

  getMesecOsebaData(y, m, emso) {
    return {
      ime: "Jaka Presečnik",
      data: [
        {od: "2020-12-01T22:30", do: "2020-12-01T23:30", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-02T22:30", do: "2020-12-03T07:30", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-03T21:30", do: "2020-12-04T05:00", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-04T12:30", do: "2020-12-04T18:00", odd: "2020-12-04T22:30", dod: "2020-12-05T03:00", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-05T22:30", do: "2020-12-06T03:00", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-15T12:30", do: "2020-12-15T14:00", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-16T01:30", do: "2020-12-16T03:30", odd: "2020-12-16T07:30", dod: "2020-12-16T18:00", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-20T01:30", do: "2020-12-20T03:30", odd: "2020-12-20T07:30", dod: "2020-12-20T18:00", visinska: 0, dopust: false, bolniska: false },
      ]
    }
  }

  calcSkupaj(startDate: Date, endDate: Date, startDva?: Date, endDva?: Date) {
    let dva = endDva && startDva;
    let diff = endDate.getTime() - startDate.getTime();
    let diffDva = dva ? (endDva.getTime() - startDva.getTime()) + diff : null;
    let hours: number = Math.floor(diff / (60 * 60 * 1000));
    let hoursDva: number = Math.floor(diffDva / (60 * 60 * 1000));
    let minutes: number = Math.floor(diff / (60 * 1000)) - (hours * 60);
    let minutesDva: number = Math.floor(diffDva / (60 * 1000)) - (hoursDva * 60);

    if (diffDva > 0) {
      return [hoursDva, minutesDva];
    }else {
      return [hours, minutes];
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

  constructor() { }
}
