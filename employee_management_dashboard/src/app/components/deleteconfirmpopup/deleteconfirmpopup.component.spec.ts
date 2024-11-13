import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfirmpopupComponent } from './deleteconfirmpopup.component';

describe('DeleteconfirmpopupComponent', () => {
  let component: DeleteconfirmpopupComponent;
  let fixture: ComponentFixture<DeleteconfirmpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteconfirmpopupComponent]
    });
    fixture = TestBed.createComponent(DeleteconfirmpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
