import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsDanesComponent } from './os-danes.component';

describe('OsDanesComponent', () => {
  let component: OsDanesComponent;
  let fixture: ComponentFixture<OsDanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsDanesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsDanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
