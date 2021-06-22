import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCrudComponent } from './blog-crud.component';

describe('BlogCrudComponent', () => {
  let component: BlogCrudComponent;
  let fixture: ComponentFixture<BlogCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
