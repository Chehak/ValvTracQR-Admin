import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdditionalFieldComponent } from './add-additional-field.component';

describe('AddAdditionalFieldComponent', () => {
  let component: AddAdditionalFieldComponent;
  let fixture: ComponentFixture<AddAdditionalFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdditionalFieldComponent]
    });
    fixture = TestBed.createComponent(AddAdditionalFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
