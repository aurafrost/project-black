import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbHomeSlider2Component } from './zb-home-slider2.component';

describe('ZbHomeSlider2Component', () => {
  let component: ZbHomeSlider2Component;
  let fixture: ComponentFixture<ZbHomeSlider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbHomeSlider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbHomeSlider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
