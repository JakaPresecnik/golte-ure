import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'os-danes',
  templateUrl: './os-danes.component.html',
  styleUrls: ['./os-danes.component.css']
})
export class OsDanesComponent implements OnInit {
  @Input() oseba;
  @Input() emso;
  @Input() datum;
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
      od: new FormControl(this.emso ? this.emso.od : null),
      do: new FormControl(this.emso ? this.emso.do : null),
      odd: new FormControl(this.emso ? this.emso.odd : null),
      dod: new FormControl(this.emso ? this.emso.dod : null),
      visinska: new FormControl(this.emso ? this.emso.visinska : 0),
      dopust: new FormControl(this.emso ? this.emso.dopust : false),
      bolniska: new FormControl(this.emso ? this.emso.bolniska : false) 
    })
  }

}
