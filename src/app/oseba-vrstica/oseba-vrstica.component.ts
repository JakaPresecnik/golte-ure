import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[oseba-vrstica]',
  templateUrl: './oseba-vrstica.component.html',
  styleUrls: ['./oseba-vrstica.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OsebaVrsticaComponent implements OnInit {
  @Input() data;
  @Input() i;
  odTime: Date;
  oddTime: Date;
  doTime: Date;
  dodTime: Date;

  getSkupaj(startDate: Date, endDate: Date, startDva?: Date, endDva?: Date) {
    let dva = endDva && startDva;
    let diff = endDate.getTime() - startDate.getTime();
    let diffDva = dva ? (endDva.getTime() - startDva.getTime()) + diff : null;
    let hours: number = Math.floor(diff / (60 * 60 * 1000));
    let hoursDva: number = Math.floor(diffDva / (60 * 60 * 1000));
    let minutes: number = Math.floor(diff / (60 * 1000)) - (hours * 60);
    let minutesDva: number = Math.floor(diffDva / (60 * 1000)) - (hours * 60);

    if (diffDva !== null) {
      if(minutes === 0) {
        return `${hoursDva}`;
      }else {
        return `${hoursDva}:${minutesDva}`;
      }
    }
    if(minutes === 0) {
      return `${hours}`;
    }else {
      return `${hours}:${minutes}`;
    }
  }

  getNocne(sD: Date, eD: Date) {
    let ura: number = sD.getHours();
    let minute: number = sD.getMinutes();
    let uraDo: number = eD.getHours();

    let dvaDni: boolean = !!(eD.getDate()-sD.getDate());
    
    let hNocna: number = 0;
    let mNocna: number = 0;

    for(; ura < 25; ura++) {
      if (ura >= uraDo && !dvaDni) {
        break;
      }else if(ura < 22 && ura >= 6) {
        continue;
      }else{
        if(minute !== 0 && uraDo > 6 && uraDo < 22) {
          mNocna = +minute;
          minute = 0;
        }else {
          hNocna++;
        }
      }

      if(ura === 24) {
        ura = 0;
        dvaDni = !dvaDni;
      }
    }
    return hNocna+ ':' + mNocna;
  }

  isSunday() {
      return new Date(this.data.od).getDay() === 0;
  }

  constructor() { }

  ngOnInit(): void {
    if(this.data.od) {
      this.odTime = new Date(this.data.od);
    }
    if(this.data.odd) {
      this.oddTime = new Date(this.data.odd);
    }
    if(this.data.do) {
      this.doTime = new Date(this.data.do);
    }
    if(this.data.dod) {
      this.dodTime = new Date(this.data.dod);
    }
  }

}
