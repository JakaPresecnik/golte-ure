import { OsebaService } from './../oseba.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: '[app-oseba]',
  templateUrl: './oseba.component.html',
  styleUrls: ['./oseba.component.css']
})
export class OsebaComponent implements OnInit {
  emso: string;
  leto: number;
  mesec: number;
  data;
  mData: {m: string, days: number};
  counter: number = 0;

  days() {
    return new Array(this.mData.days);
  }
  getDay (i) {
    let dan = new Date(this.leto, this.mesec-1, i).getDay();

    if(dan === 0) {
      return 'table-success';
    }else if(dan === 6) {
      return 'table-info';
    }
  }

  passData(i) {
    if(this.data.data[this.counter] && new Date(this.data.data[this.counter].od).getDate() === i) {
      let j = this.counter;
      this.counter++;
      return this.data.data[j];
    }else {
      return {}
    }
  }

  constructor( 
    private osebaService: OsebaService, 
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.emso = params.get('emso');
      this.leto = +params.get('leto');
      this.mesec = +params.get('mesec');
    });

    this.mData = this.osebaService.getMesecData(this.mesec, this.leto);
    this.data = this.osebaService.getMesecOsebaData(this.leto, this.mesec, this.emso);
  }

  ngAfterViewChecked(){
    this.cdr.detach();
  }
}
