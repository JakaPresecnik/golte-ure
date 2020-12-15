import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domov',
  templateUrl: './domov.component.html',
  styleUrls: ['./domov.component.css']
})
export class DomovComponent implements OnInit {
  currentDate: string;
  constructor() { }

  ngOnInit(): void {
    let today = new Date();
    this.currentDate = `${today.getDate().toString()}.${today.getMonth().toString()}.${today.getFullYear().toString()}`
  }

}
