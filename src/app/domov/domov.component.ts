import { DomovService } from '../domov.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domov',
  templateUrl: './domov.component.html',
  styleUrls: ['./domov.component.css']
})
export class DomovComponent implements OnInit {
  currentDate;
  osebje: { ime: string; emso: string; }[];
  datum;
  
  spremeniDatum(e) {
    e.preventDefault();
    this.currentDate = new Date(e.target.value)
  }

  constructor(service: DomovService) { 
    this.osebje = service.getOsebje();
    this.datum = service.getDatumData(this.currentDate);
  }

  ngOnInit(): void {
    this.currentDate = new Date();
  }
}
