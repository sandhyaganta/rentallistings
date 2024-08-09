import { Component } from '@angular/core';
import { AgGridAngular, AgGridModule,ICellRendererAngularComp } from 'ag-grid-angular';
import {ColDef, ICellRendererParams, ValueGetterParams } from 'ag-grid-community';
import { ButtComponent } from '../butt/butt.component';

@Component({
  selector: 'app-compaines',
  standalone: true,
  imports: [AgGridModule, ],
  templateUrl: './compaines.component.html',
  styleUrl: './compaines.component.css'
})
export class CompainesComponent  {
  public rowData: any[];
  public columnDefs: ColDef[];
  constructor(){
    this.columnDefs = [
      { field: "Sno",width:70 },
      { field: "CompanyName",width:120 },
      { field: "Email",width:100 },
      { field: "Package",width:100 },
      { field: "Phone",width:100 },
      { field: "Fax",width:100 },
      { field: "website",width:100 },
      { field: "Address",width:100 },
      { field: "Languages",width:100 },
      { field: "LoginStatus",width:100 },
      { field: "CreatedDate",width:100 },
      { field: "ModifiedDate",width:100 },
      { field: "Status",width:90, },
      { field: "button", cellRenderer: ButtComponent },
    ];
  
  
    this.rowData = [
      {Sno:1,CompanyName:"PackageTesting",Email:"	somikasamrat@gmail.com",Package:"Medium Company	",Phone:9999999999,Fax:"9988776655",Website:"www.rentallistings.co.nz",Address:"36 Seymour Road, Sunnyvale,…",Languages:"Maori, Samoan, Tongan",LoginStatus:"approve",CreatedDate:"04-04-2024 14:38:55",ModifiedDate:"04-04-2024 ,14:50:30",Status:"yes"},
      
      {Sno:2,CompanyName:"Pranay",Email:"rudra.pranay1@gmail.com",Package:"Small Company",Phone:9090909090,Fax:"",Website:"",Address:"",Languages:"",LoginStatus:"pending",CreatedDate:"",ModifiedDate:"",Status:"yes"},
      {Sno:3,CompanyName:"PackageTest",Email:"	package@rentallistings.co.nz",Package:"Custom 2",Phone:99879879879,Fax:"",Website:"",Address:"",Languages:"pending",LoginStatus:"",CreatedDate:"",ModifiedDate:"",Status:"yes"},
      {Sno:4,CompanyName:"PackageDemo",Email:"1234@gmail.co.nz",Package:"Small Company",Phone:99292929098,Fax:"",Website:"",Address:"",Languages:"",LoginStatus:"Apporvoed",CreatedDate:"",ModifiedDate:"",Status:""},
      {Sno:5,CompanyName:"DemoSRK",Email:"samratsrikanthgoud@gmail.com	",Package:"Small Company	",Phone:770123654,Fax:"",Website:"",Address:"",Languages:"pending",LoginStatus:"",CreatedDate:"",ModifiedDate:"",Status:"yes"},
      {Sno:6,CompanyName:"ABCDE",Email:"abcde@gmail.com",Package:"Large Company",Phone:99999999090,Fax:"",Website:"",Address:"",Languages:"",LoginStatus:"pending",CreatedDate:"",ModifiedDate:"",Status:"yes"}
  
     ];
  
  
  }

  
 
}

 

