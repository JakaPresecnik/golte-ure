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
