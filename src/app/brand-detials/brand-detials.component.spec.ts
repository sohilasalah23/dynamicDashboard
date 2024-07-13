import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDetialsComponent } from './brand-detials.component';

describe('BrandDetialsComponent', () => {
  let component: BrandDetialsComponent;
  let fixture: ComponentFixture<BrandDetialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandDetialsComponent]
    });
    fixture = TestBed.createComponent(BrandDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
