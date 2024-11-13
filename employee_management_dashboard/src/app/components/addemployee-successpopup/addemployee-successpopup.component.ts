import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee-successpopup',
  templateUrl: './addemployee-successpopup.component.html',
  styleUrls: ['./addemployee-successpopup.component.css']
})
export class AddemployeeSuccesspopupComponent {
  constructor(private router: Router ) { }

  close(){
    this.router.navigate(['/employeelist']);
  }
}
