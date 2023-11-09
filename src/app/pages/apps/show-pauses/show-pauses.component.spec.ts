import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPausesComponent } from './show-pauses.component';

describe('ShowPausesComponent', () => {
  let component: ShowPausesComponent;
  let fixture: ComponentFixture<ShowPausesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPausesComponent]
    });
    fixture = TestBed.createComponent(ShowPausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
