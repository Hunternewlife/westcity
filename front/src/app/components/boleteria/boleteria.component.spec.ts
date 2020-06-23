import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoleteriaComponent } from './boleteria.component';

describe('BoleteriaComponent', () => {
  let component: BoleteriaComponent;
  let fixture: ComponentFixture<BoleteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoleteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoleteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
