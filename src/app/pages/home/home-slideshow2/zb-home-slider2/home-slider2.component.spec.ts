import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlider2Component } from './home-slider2.component';

describe('HomeSlider2Component', () => {
  let component: HomeSlider2Component;
  let fixture: ComponentFixture<HomeSlider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSlider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
