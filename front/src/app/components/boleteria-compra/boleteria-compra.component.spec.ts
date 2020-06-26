import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoleteriaCompraComponent } from './boleteria-compra.component';

describe('BoleteriaCompraComponent', () => {
  let component: BoleteriaCompraComponent;
  let fixture: ComponentFixture<BoleteriaCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoleteriaCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoleteriaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
