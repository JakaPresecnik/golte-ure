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
  @Input() i: number;
  @Input() prazniki: number[];
  odTime: Date;
  oddTime: Date;
  doTime: Date;
  dodTime: Date;
  skupaj: number;
  nedeljske: number;
  nedeljskeDva: number;
  praznicne: number;
  praznicneDva: number;
  nocneEna: number = 0;
  nocneDva: number = 0;
  dopust: boolean;
  bolniska: boolean;
  visinska: number;
  dezurni: boolean;
  
  getNocne() {
    return (this.nocneEna + this.nocneDva) / 60;
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
    this.nedeljske = this.service.calcNedeljske(this.odTime, this.doTime);
    this.nedeljskeDva= this.service.calcNedeljske(this.oddTime, this.dodTime);
    if(this.nedeljskeDva){
      this.nedeljske += this.nedeljskeDva;
    }
    this.praznicne = this.service.calcPraznicne(this.odTime, this.doTime, this.prazniki);
    this.praznicneDva = this.service.calcPraznicne(this.oddTime, this.dodTime, this.prazniki);
    if (this.praznicneDva) {
      this.praznicne += this.praznicneDva;
    }
    this.dopust = this.data.dopust;
    this.bolniska = this.data.bolniska;
    this.visinska = this.data.visinska;
    this.dezurni = this.data.dezurni;

  }

}
