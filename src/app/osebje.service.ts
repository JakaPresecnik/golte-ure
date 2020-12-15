import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OsebjeService {
  getOsebje() {
    return [
      {ime: 'Jaka Presečnik', emso: '23678493'},
      {ime: 'Janez A. Novak', emso: '380350'}
    ]
  };

  getDatumData() {
    return {
      "23678493": { datum: "2020-12-15",  od: "01:32", do: "2020-12-15T03:32", visinska: 0, dopust: false, bolniska: false}
    }
  }
  constructor() { }
}
