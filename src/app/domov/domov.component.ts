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
    this.datum = service.getDatumData(this.currentDate);
  }

  ngOnInit(): void {
    let today = new Date();
    this.currentDate = `${today.getFullYear().toString()}-${(today.getMonth()+1).toString()}-${today.getDate().toString()}`
  }

}
