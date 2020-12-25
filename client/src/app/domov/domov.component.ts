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
    this.currentDate = new Date();

    this.service.getDatumData(this.currentDate).subscribe((data) => {
      this.datum = data.datum;
      this.osebje = data.osebje;
      this.loaded = true;
    });
  }
}
