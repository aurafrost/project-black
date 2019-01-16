import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvandorholyfieldComponent } from './evandorholyfield.component';

describe('EvandorholyfieldComponent', () => {
  let component: EvandorholyfieldComponent;
  let fixture: ComponentFixture<EvandorholyfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvandorholyfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvandorholyfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
