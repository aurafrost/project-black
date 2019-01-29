import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbTestProfileComponent } from './zb-test-profile.component';

describe('ZbTestProfileComponent', () => {
  let component: ZbTestProfileComponent;
  let fixture: ComponentFixture<ZbTestProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbTestProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbTestProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
