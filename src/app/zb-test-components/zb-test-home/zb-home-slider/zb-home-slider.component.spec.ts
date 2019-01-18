import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbHomeSliderComponent } from './zb-home-slider.component';

describe('ZbHomeSliderComponent', () => {
  let component: ZbHomeSliderComponent;
  let fixture: ComponentFixture<ZbHomeSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbHomeSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbHomeSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
