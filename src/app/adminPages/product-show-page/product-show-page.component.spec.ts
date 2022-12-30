import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductShowPageComponent } from './product-show-page.component';

describe('ProductShowPageComponent', () => {
  let component: ProductShowPageComponent;
  let fixture: ComponentFixture<ProductShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductShowPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
