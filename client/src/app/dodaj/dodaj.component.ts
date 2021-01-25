import { DodajService } from './../dodaj.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {
  form: FormGroup;
  constructor(private service: DodajService) { }

  shrani() {
    this.service.postOseba(this.form.value);
  }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      ime: new FormControl(),
      emso: new FormControl()
    })
  }

}
