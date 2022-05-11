import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfailedComponent } from './pfailed.component';

describe('PfailedComponent', () => {
  let component: PfailedComponent;
  let fixture: ComponentFixture<PfailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
