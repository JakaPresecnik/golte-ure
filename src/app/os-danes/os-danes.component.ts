import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'os-danes',
  templateUrl: './os-danes.component.html',
  styleUrls: ['./os-danes.component.css']
})
export class OsDanesComponent implements OnInit {
  @Input() oseba;
  @Input() dan;
  form: FormGroup;
  
  resetUr() {
    this.form.value.od = null;
    this.form.value.do = null;
    this.form.value.odd = null;
    this.form.value.dod = null;
    this.form.value.visinska = 0;
  }

  dopustJe() {
    if(this.form.value.dopust) {
      this.resetUr()
      return true
    }
  }
  bolniskaJe() {
    if(this.form.value.bolniska) {
      this.resetUr()
      return true
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      od: new FormControl(this.dan ? this.dan.od : null),
      do: new FormControl(this.dan ? this.dan.do : null),
      odd: new FormControl(this.dan ? this.dan.odd : null),
      dod: new FormControl(this.dan ? this.dan.dod : null),
      visinska: new FormControl(this.dan ? this.dan.visinska : 0),
      dopust: new FormControl(this.dan ? this.dan.dopust : false),
      bolniska: new FormControl(this.dan ? this.dan.bolniska : false) 
    })
  }

}
