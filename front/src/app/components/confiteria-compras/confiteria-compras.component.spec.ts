import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiteriaComprasComponent } from './confiteria-compras.component';

describe('ConfiteriaComprasComponent', () => {
  let component: ConfiteriaComprasComponent;
  let fixture: ComponentFixture<ConfiteriaComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiteriaComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiteriaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
