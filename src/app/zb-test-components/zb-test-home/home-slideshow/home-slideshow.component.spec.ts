import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlideshowComponent } from './home-slideshow.component';

describe('HomeSlideshowComponent', () => {
  let component: HomeSlideshowComponent;
  let fixture: ComponentFixture<HomeSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
