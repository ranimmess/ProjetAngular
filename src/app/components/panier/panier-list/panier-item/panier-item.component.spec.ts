import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierItemComponent } from './panier-item.component';

describe('PanierItemComponent', () => {
  let component: PanierItemComponent;
  let fixture: ComponentFixture<PanierItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
