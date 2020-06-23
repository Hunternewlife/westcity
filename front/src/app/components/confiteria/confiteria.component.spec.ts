import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiteriaComponent } from './confiteria.component';

describe('ConfiteriaComponent', () => {
  let component: ConfiteriaComponent;
  let fixture: ComponentFixture<ConfiteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
