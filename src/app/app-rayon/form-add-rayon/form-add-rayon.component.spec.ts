import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddRayonComponent } from './form-add-rayon.component';

describe('FormAddRayonComponent', () => {
  let component: FormAddRayonComponent;
  let fixture: ComponentFixture<FormAddRayonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddRayonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
