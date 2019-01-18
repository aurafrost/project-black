import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NascarComponent } from './nascar.component';

describe('NascarComponent', () => {
  let component: NascarComponent;
  let fixture: ComponentFixture<NascarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NascarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NascarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
