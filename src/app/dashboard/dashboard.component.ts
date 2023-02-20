import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  today= new Date();
  jstoday = '';
  EmployeeName: string[] = [];
  EmployeeDateIn: string[] = [];
  EmployeeIsActive: string[] = [];
  filterEmployeeName: string[] = [];
  filterEmployeeDateIn: string[] = [];
  filterEmployeeIsActive: string[] = [];
  inputEmployee: string = "";
  // Employees: Employee[] = [];

  constructor() { }

  initEmployee() {
    this.EmployeeName.push("Jonathan");
    this.EmployeeName.push("Joseph");
    this.EmployeeName.push("Jotaro");
    this.EmployeeName.push("Josuke");
    this.EmployeeName.push("Giorno");
    this.EmployeeName.push("Jolyne");

    this.EmployeeDateIn.push("1868-4-4");
    this.EmployeeDateIn.push("1920-9-27");
    this.EmployeeDateIn.push("1970-10-1");
    this.EmployeeDateIn.push("1983-12-3");
    this.EmployeeDateIn.push("1985-4-16");
    this.EmployeeDateIn.push("1992-6-7");

    for (let index = 0; index < this.EmployeeName.length; index++) {
      // var temp: new Employee(this.EmployeeName[index],this.EmployeeDateIn[index]);
      this.EmployeeIsActive.push("true");
    }

    this.defaultFilter();
  }

  onKey(event: any) {
    this.inputEmployee = event.target.value;
  }

  public addEmployee() {
    this.EmployeeName.push(this.inputEmployee);

    this.jstoday = formatDate(this.today, 'yyyy-MM-dd', 'en-US', '+0530');
    this.EmployeeDateIn.push(this.jstoday);

    this.EmployeeIsActive.push("true");

    this.defaultFilter();
  }

  public deleteEmployee(_name: string) {
    const index: number = this.EmployeeName.indexOf(_name);
    if (index !== -1) {
      this.EmployeeName.splice(index, 1);
      this.EmployeeDateIn.splice(index, 1);
      this.EmployeeIsActive.splice(index, 1);
    }
    this.defaultFilter();
  }

  public searchEmployee() {
    if(this.inputEmployee == "")
    {
      this.defaultFilter();
    }
    else
    {
      const index: number = this.EmployeeName.indexOf(this.inputEmployee);
      this.filterEmployeeName = [];
      this.filterEmployeeDateIn = [];
      this.filterEmployeeIsActive = [];
      if (index !== -1){
        this.filterEmployeeName.push(this.EmployeeName[index]);
        this.filterEmployeeDateIn.push(this.EmployeeDateIn[index]);
        this.filterEmployeeIsActive.push(this.EmployeeIsActive[index]);
      }
    }
  }

  public defaultFilter() {
    this.filterEmployeeName = [];
    this.filterEmployeeDateIn = [];
    this.filterEmployeeIsActive = [];
    for (let index = 0; index < this.EmployeeName.length; index++) {
      this.filterEmployeeName.push(this.EmployeeName[index]);
      this.filterEmployeeDateIn.push(this.EmployeeDateIn[index]);
      this.filterEmployeeIsActive.push(this.EmployeeIsActive[index]);
    }
  }

  ngOnInit(): void {
    this.initEmployee();
  }

}

// export class Employee implements OnInit {
//   Name: string = "";
//   DateIn: string = "";
//   IsActive: string = "true";
  
//   constructor(public _name: string, public _datein: string){
//     this.Name = _name;
//     this.DateIn = _datein;
//     this.IsActive = "true";
//   }

//   ngOnInit(): void {
    
//   }
// }