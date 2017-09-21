import { Component, OnInit, Input } from '@angular/core';
import { EmployeeInterface } from './../employee-interface'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeListComponent implements OnInit {
@Input() employeeDetail
employeesList:EmployeeListComponent[];
  constructor() { }

  ngOnInit() {
  }

}
