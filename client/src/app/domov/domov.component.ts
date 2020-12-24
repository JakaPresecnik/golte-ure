import { DomovService } from '../domov.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domov',
  templateUrl: './domov.component.html',
  styleUrls: ['./domov.component.css']
})
export class DomovComponent implements OnInit {
  currentDate;
  osebje: any[] = [];
  loaded: boolean = false;
  datum: {};
  
  spremeniDatum(e) {
    e.preventDefault();
    this.currentDate = new Date(e.target.value)
  }

  constructor(private service: DomovService) { }

  ngOnInit(): void {
    this.service.getOsebje().subscribe((osebje: any[]) => {
      this.osebje = osebje;
    });
    this.service.getDatumData(this.currentDate).subscribe((datum: {}) => {
      console.log(datum)
      this.datum = datum;
      this.loaded = true;
    });
    this.currentDate = new Date();
  }
}
