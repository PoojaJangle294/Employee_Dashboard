import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { AddemployeeSuccesspopupComponent } from '../addemployee-successpopup/addemployee-successpopup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  departments = ['Administrative', 'Accounting','HR', 'Operations', 'Engineering', 'Sales', 'Marketing'];
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, public dialog: MatDialog) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });
  }

  //submit the employee data
  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe();
      let dialogRef = this.dialog.open(AddemployeeSuccesspopupComponent, {
        height: '250px',
        width: '400px',
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`); 
      });
    }
  }
}
