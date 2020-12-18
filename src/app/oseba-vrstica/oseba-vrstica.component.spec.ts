import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsebaVrsticaComponent } from './oseba-vrstica.component';

describe('OsebaVrsticaComponent', () => {
  let component: OsebaVrsticaComponent;
  let fixture: ComponentFixture<OsebaVrsticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsebaVrsticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsebaVrsticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
