import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LchartComponent } from './lchart.component';

describe('LchartComponent', () => {
  let component: LchartComponent;
  let fixture: ComponentFixture<LchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
