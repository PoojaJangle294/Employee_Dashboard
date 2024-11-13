import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

const routes: Routes = [
  {path:'', component:AddEmployeeComponent},
  {path:'employeelist', component:EmployeeListComponent},
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'employeecard', component:EmployeeCardComponent},
  // {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
