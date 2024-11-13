import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../../services/employee.service';
import { DeleteconfirmpopupComponent } from '../deleteconfirmpopup/deleteconfirmpopup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'department', 'joiningDate', 'actions'];
  dataSource = new MatTableDataSource();
  selectedDepartment: string = '';

  @ViewChild(MatSort) sort!: MatSort ;
  
  constructor(private employeeService: EmployeeService, public dialog: MatDialog){}
  ngOnInit(){
    this.fetchEmployees();
  }


  // fetched the all employee data
  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.dataSource.data = employees;
      this.dataSource.sort = this.sort;
    });
  }

  //open the delete popup confirmation
  opendeletepopup(id: number): void {
    let dialogRef = this.dialog.open(DeleteconfirmpopupComponent, {
      height: '250px',
      width: '400px',
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.fetchEmployees();
    });
  }

  //filter data by department
  applyFilter(department: any) { 
  this.selectedDepartment = department.target.value;
  const filterValue = department.target.value.trim().toLowerCase();
  this.dataSource.filter = filterValue;
}

}
