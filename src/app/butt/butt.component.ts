import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AgGridAngular, AgGridModule,ICellRendererAngularComp } from 'ag-grid-angular';
import {ColDef, ICellRendererParams, ValueGetterParams } from 'ag-grid-community';
import { Router } from '@angular/router';


@Component({
  selector: 'app-butt',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './butt.component.html',
  styleUrl: './butt.component.css'
})
export class ButtComponent implements ICellRendererAngularComp {
 constructor(private router:Router){}
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    this.router.navigate(['../pmanagers'])
  }

}
