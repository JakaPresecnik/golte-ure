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
        {datum: "2020-12-15", od: "01:32", do: "2020-12-15T03:32", visinska: 0, dopust: false, bolniska: false },
        {datum: "2020-12-16", od: "01:32", do: "2020-12-16T03:32", visinska: 0, dopust: false, bolniska: false },
      ]
    }
  }

  constructor() { }
}
