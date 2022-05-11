import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPanierComponent } from './empty-panier.component';

describe('EmptyPanierComponent', () => {
  let component: EmptyPanierComponent;
  let fixture: ComponentFixture<EmptyPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
