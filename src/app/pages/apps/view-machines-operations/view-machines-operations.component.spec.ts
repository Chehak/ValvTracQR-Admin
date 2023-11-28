import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMachinesOperationsComponent } from './view-machines-operations.component';

describe('ViewMachinesOperationsComponent', () => {
  let component: ViewMachinesOperationsComponent;
  let fixture: ComponentFixture<ViewMachinesOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewMachinesOperationsComponent]
    });
    fixture = TestBed.createComponent(ViewMachinesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
