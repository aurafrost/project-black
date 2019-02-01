import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Personality2Component } from './personality2.component';

describe('Personality2Component', () => {
  let component: Personality2Component;
  let fixture: ComponentFixture<Personality2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Personality2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Personality2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
