import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanyewestComponent } from './kanyewest.component';

describe('KanyewestComponent', () => {
  let component: KanyewestComponent;
  let fixture: ComponentFixture<KanyewestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanyewestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanyewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
