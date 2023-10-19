import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesOperationsComponent } from './machines-operations.component';

describe('MachinesOperationsComponent', () => {
  let component: MachinesOperationsComponent;
  let fixture: ComponentFixture<MachinesOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinesOperationsComponent]
    });
    fixture = TestBed.createComponent(MachinesOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
