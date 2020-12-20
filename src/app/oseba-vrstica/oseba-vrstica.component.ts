import { OsebaService } from './../oseba.service';
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
  skupaj: number[];
  nocneEna: number = 0;
  nocneDva: number = 0;
  
  getSkupaj() {
    if (this.skupaj[1] === 0) {
      return this.skupaj[0]
    }else {
      return this.skupaj[0] + ':' + this.skupaj[1]
    }
  }
  
  getNocne() {
    return (this.nocneEna + this.nocneDva) / 60;
  }

  isSunday() {
      return new Date(this.data.od).getDay() === 0;
  }

  constructor(private service: OsebaService) { }

  ngOnInit(): void {
    if(this.data.od) {
      this.odTime = new Date(this.data.od);
    }
    if(this.data.odd) {
      this.oddTime = new Date(this.data.odd);
    }
    if(this.data.do) {
      this.doTime = new Date(this.data.do);
      this.nocneEna = this.service.calcNocne(this.odTime, this.doTime);
      this.skupaj = this.service.calcSkupaj(this.odTime, this.doTime, this.oddTime, this.dodTime)
    }
    if(this.data.dod) {
      this.dodTime = new Date(this.data.dod);
      this.nocneDva = this.service.calcNocne(this.oddTime, this.dodTime);
      this.skupaj = this.service.calcSkupaj(this.odTime, this.doTime, this.oddTime, this.dodTime)
    }
  }

}
