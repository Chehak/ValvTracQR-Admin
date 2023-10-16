import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatRateComponent } from './vat-rate.component';

describe('VatRateComponent', () => {
  let component: VatRateComponent;
  let fixture: ComponentFixture<VatRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VatRateComponent]
    });
    fixture = TestBed.createComponent(VatRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
