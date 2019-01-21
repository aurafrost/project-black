import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlideshow2Component } from './home-slideshow2.component';

describe('HomeSlideshow2Component', () => {
  let component: HomeSlideshow2Component;
  let fixture: ComponentFixture<HomeSlideshow2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSlideshow2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlideshow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
