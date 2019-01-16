import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobertdowneyComponent } from './robertdowney.component';

describe('RobertdowneyComponent', () => {
  let component: RobertdowneyComponent;
  let fixture: ComponentFixture<RobertdowneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobertdowneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobertdowneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
