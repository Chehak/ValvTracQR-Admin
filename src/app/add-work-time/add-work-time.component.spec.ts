import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkTimeComponent } from './add-work-time.component';

describe('AddWorkTimeComponent', () => {
  let component: AddWorkTimeComponent;
  let fixture: ComponentFixture<AddWorkTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkTimeComponent]
    });
    fixture = TestBed.createComponent(AddWorkTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
