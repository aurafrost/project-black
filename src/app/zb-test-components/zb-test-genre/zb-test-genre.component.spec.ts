import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZbTestGenreComponent } from './zb-test-genre.component';

describe('ZbTestGenreComponent', () => {
  let component: ZbTestGenreComponent;
  let fixture: ComponentFixture<ZbTestGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZbTestGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZbTestGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
