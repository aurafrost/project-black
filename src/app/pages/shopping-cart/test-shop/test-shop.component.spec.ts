import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShopComponent } from './test-shop.component';

describe('TestShopComponent', () => {
  let component: TestShopComponent;
  let fixture: ComponentFixture<TestShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
