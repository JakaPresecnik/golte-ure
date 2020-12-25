import { OsebaService } from './../oseba.service';
import { Component, OnInit } from '@angular/core';
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
  loaded: boolean = false;
  counter: number = 0;

  days() {
    return new Array(this.data.skupajDni);
  }
  getDay (i) {
    let datum = new Date(this.leto, this.mesec-1, i);
    let dan = datum.getDay();
    if(this.data.prazniki.includes(datum.toDateString())) {
      return 'table-warning'
    }else if(dan === 0) {
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

  passPrazniki() {
    return this.data.prazniki.map(praznik => {
      return new Date(praznik).getDate();
    });
  }

  constructor( 
    private osebaService: OsebaService, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.emso = params.get('emso');
      this.leto = +params.get('leto');
      this.mesec = +params.get('mesec');
    });

    this.osebaService.getMesecOsebaData(this.leto, this.mesec, this.emso)
    .subscribe((data: {}) => {
      this.data = data;
      this.loaded = true;
    })
  }
}
