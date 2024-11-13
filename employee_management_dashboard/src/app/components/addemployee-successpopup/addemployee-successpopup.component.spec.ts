import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeeSuccesspopupComponent } from './addemployee-successpopup.component';

describe('AddemployeeSuccesspopupComponent', () => {
  let component: AddemployeeSuccesspopupComponent;
  let fixture: ComponentFixture<AddemployeeSuccesspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddemployeeSuccesspopupComponent]
    });
    fixture = TestBed.createComponent(AddemployeeSuccesspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
