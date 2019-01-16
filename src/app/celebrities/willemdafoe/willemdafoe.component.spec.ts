import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillemdafoeComponent } from './willemdafoe.component';

describe('WillemdafoeComponent', () => {
  let component: WillemdafoeComponent;
  let fixture: ComponentFixture<WillemdafoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillemdafoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillemdafoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
