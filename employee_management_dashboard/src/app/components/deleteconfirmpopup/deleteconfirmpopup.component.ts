import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-deleteconfirmpopup',
  templateUrl: './deleteconfirmpopup.component.html',
  styleUrls: ['./deleteconfirmpopup.component.css']
})
export class DeleteconfirmpopupComponent {

  constructor(private employeeService: EmployeeService, 
    public dialogRef: MatDialogRef<DeleteconfirmpopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number 
  ){}

  //delete the employee by id
  deleteEmployee(){
    this.employeeService.deleteEmployee(this.data).subscribe();
  }

  //close the delete popup
  cancel(){
    this.dialogRef.close();
  }

}
