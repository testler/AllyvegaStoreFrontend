import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryThumbnailComponent } from './category-thumbnail.component';

describe('CategoryThumbnailComponent', () => {
  let component: CategoryThumbnailComponent;
  let fixture: ComponentFixture<CategoryThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
