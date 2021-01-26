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
    if(!this.data.data[this.counter]) {
      return {}
    }
    const datum = new Date(this.data.data[this.counter].datum);
    const year = datum.getFullYear();
    const mesec = datum.getMonth() + 1 <= 9 ? '0' + (datum.getMonth()+1) : (datum.getMonth()+1);
    const date = datum.getDate();
    const od = new Date(`${year}-${mesec}-${date}T${this.data.data[this.counter].od}`)
    const odd = this.data.data[this.counter].odd ? new Date(`${year}-${mesec}-${date}T${this.data.data[this.counter].odd}`) : null;
    
    if(this.data.data[this.counter] && new Date(datum).getDate() === i) {
      let j = this.counter;
      this.data.data[this.counter].od = od;
      this.data.data[this.counter].odd = odd;
      this.data.data[this.counter].do = this.data.data[this.counter].till;
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
