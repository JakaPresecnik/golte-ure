import { OsebaService } from './../oseba.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oseba',
  templateUrl: './oseba.component.html',
  styleUrls: ['./oseba.component.css']
})
export class OsebaComponent implements OnInit {
  emso: string;
  leto: number;
  mesec: number;
  data;
  mData: {m: string, days: number};

  days() {
    return new Array(this.mData.days);
  }

  constructor( private osebaService: OsebaService, private route: ActivatedRoute) {
    
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

}
