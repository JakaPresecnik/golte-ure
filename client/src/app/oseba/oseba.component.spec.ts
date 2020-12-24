import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsebaComponent } from './oseba.component';

describe('OsebaComponent', () => {
  let component: OsebaComponent;
  let fixture: ComponentFixture<OsebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsebaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
