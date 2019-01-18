import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbTestHomeComponent } from './zb-test-home.component';

describe('ZbTestHomeComponent', () => {
  let component: ZbTestHomeComponent;
  let fixture: ComponentFixture<ZbTestHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbTestHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbTestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
