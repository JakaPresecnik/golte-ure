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
        {od: "2020-12-15T12:30", do: "2020-12-15T14:00", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-16T01:30", do: "2020-12-16T03:30", odd: "2020-12-16T07:30", dod: "2020-12-16T18:00", visinska: 0, dopust: false, bolniska: false },
        {od: "2020-12-20T01:30", do: "2020-12-20T03:30", odd: "2020-12-20T07:30", dod: "2020-12-20T18:00", visinska: 0, dopust: false, bolniska: false },
      ]
    }
  }

  constructor() { }
}
