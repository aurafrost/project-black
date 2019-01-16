import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TomcruiseComponent } from './tomcruise.component';

describe('TomcruiseComponent', () => {
  let component: TomcruiseComponent;
  let fixture: ComponentFixture<TomcruiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomcruiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TomcruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
