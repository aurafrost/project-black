import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviestvComponent } from './moviestv.component';

describe('MoviestvComponent', () => {
  let component: MoviestvComponent;
  let fixture: ComponentFixture<MoviestvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviestvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviestvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
