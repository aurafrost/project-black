import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbTestGenrePageComponent } from './zb-test-genre-page.component';

describe('ZbTestGenrePageComponent', () => {
  let component: ZbTestGenrePageComponent;
  let fixture: ComponentFixture<ZbTestGenrePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbTestGenrePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbTestGenrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
