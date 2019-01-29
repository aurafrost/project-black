import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivenationComponent } from './livenation.component';

describe('LivenationComponent', () => {
  let component: LivenationComponent;
  let fixture: ComponentFixture<LivenationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivenationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivenationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
