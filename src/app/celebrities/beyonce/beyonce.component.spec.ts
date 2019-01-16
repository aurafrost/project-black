import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeyonceComponent } from './beyonce.component';

describe('BeyonceComponent', () => {
  let component: BeyonceComponent;
  let fixture: ComponentFixture<BeyonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeyonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeyonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
