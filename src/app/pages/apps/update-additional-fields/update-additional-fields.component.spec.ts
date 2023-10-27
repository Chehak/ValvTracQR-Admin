import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdditionalFieldsComponent } from './update-additional-fields.component';

describe('UpdateAdditionalFieldsComponent', () => {
  let component: UpdateAdditionalFieldsComponent;
  let fixture: ComponentFixture<UpdateAdditionalFieldsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAdditionalFieldsComponent]
    });
    fixture = TestBed.createComponent(UpdateAdditionalFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
