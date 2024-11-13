import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit{

  employees: any;

  constructor(private employeeService : EmployeeService) {
    
  }
  ngOnInit() {
    this.fetchEmployees()
  }

  //fetch the all employee data
  fetchEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees;
    });

}
}
