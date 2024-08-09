import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import {ColDef} from 'ag-grid-community';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  colDefs: ColDef[] = [
    { field: "Sno",width:90 },
    { field: "Name",width:100 },
    { field: "Phone",width:100 },
    { field: "Email",width:100 },
    { field: "LoginStatus",width:120 },
    { field: "CreatedDate",width:120 },
    { field: "ModifiedDate",width:120 },
    { field: "Status",width:100, }
  ];


  rowData = [
    { Sno: "1", Name: "Vijay Kumar", Phone: 9876567801, Email:"admin@vitasoft.in" ,LoginStatus:"approve",CreatedDate:"19-04-2024 10:44:42",ModifiedDate:"",Status:"Yes"},
    { Sno: "2", Name: "harshita", Phone: 789034567, Email:"harshita@vitasoft.in" ,LoginStatus:"approve",CreatedDate:"19-04-2024 10:44:42",ModifiedDate:"",Status:"Yes"},
    { Sno: "3", Name: "Srikanth", Phone: 909090909, Email:"srikanth@vitasoft.in" ,LoginStatus:"approve",CreatedDate:"19-04-2024 10:44:42",ModifiedDate:"",Status:"Yes"},
    { Sno: "4", Name: "Shashi", Phone: 9123454321, Email:"shashi@vitasoft.in" ,LoginStatus:"approve",CreatedDate:"19-04-2024 10:44:42",ModifiedDate:"",Status:"Yes"},
    { Sno: "5", Name: "Pranay", Phone: 9876567801, Email:"pranay@vitasoft.in" ,LoginStatus:"approve",CreatedDate:"19-04-2024 10:44:42",ModifiedDate:"",Status:"Yes"},
  ];

}
