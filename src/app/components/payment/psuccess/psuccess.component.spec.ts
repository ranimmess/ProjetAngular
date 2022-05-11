import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsuccessComponent } from './psuccess.component';

describe('PsuccessComponent', () => {
  let component: PsuccessComponent;
  let fixture: ComponentFixture<PsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
