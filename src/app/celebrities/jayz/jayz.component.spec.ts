import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JayzComponent } from './jayz.component';

describe('JayzComponent', () => {
  let component: JayzComponent;
  let fixture: ComponentFixture<JayzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JayzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JayzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
