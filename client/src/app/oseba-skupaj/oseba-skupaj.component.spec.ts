import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsebaSkupajComponent } from './oseba-skupaj.component';

describe('OsebaSkupajComponent', () => {
  let component: OsebaSkupajComponent;
  let fixture: ComponentFixture<OsebaSkupajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsebaSkupajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsebaSkupajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
