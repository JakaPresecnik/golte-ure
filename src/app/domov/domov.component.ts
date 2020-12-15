import { OsebjeService } from './../osebje.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domov',
  templateUrl: './domov.component.html',
  styleUrls: ['./domov.component.css']
})
export class DomovComponent implements OnInit {
  currentDate: string;
  osebje: { ime: string; emso: string; }[];
  datum;
  
  constructor(service: OsebjeService) { 
    this.osebje = service.getOsebje();
    this.datum = service.getDatumData();
  }

  ngOnInit(): void {
    let today = new Date();
    this.currentDate = `${today.getDate().toString()}.${today.getMonth().toString()}.${today.getFullYear().toString()}`
  }

}
