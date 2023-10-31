import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApiKeyComponent } from './update-api-key.component';

describe('UpdateApiKeyComponent', () => {
  let component: UpdateApiKeyComponent;
  let fixture: ComponentFixture<UpdateApiKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateApiKeyComponent]
    });
    fixture = TestBed.createComponent(UpdateApiKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
