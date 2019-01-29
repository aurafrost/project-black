import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JackiechanComponent } from './jackiechan.component';

describe('JackiechanComponent', () => {
  let component: JackiechanComponent;
  let fixture: ComponentFixture<JackiechanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JackiechanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JackiechanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
