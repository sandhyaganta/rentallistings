import { Component ,NO_ERRORS_SCHEMA} from '@angular/core';
import { AgFrameworkComponent, AgGridModule } from 'ag-grid-angular';
import { ViewVisitComponent } from '../view-visit/view-visit.component';

import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [AgGridModule,RouterLink],
  schemas: [NO_ERRORS_SCHEMA],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {
 
  public frameworkComponents: any;
  public rowData: any[];
  public columnDefs: ColDef[];

  constructor( ){
  
  this.columnDefs= [
    { field: "sno",width:90},
    { field: "Agent",width:100 },
    { field: "Role",width:100 },
    { field: "Proptype" ,width:100},
    { field: "Propcategory" ,width:100},
    { field: "Address",width:100 },
    { field: "Region" ,width:100},
    { field: "District",width:100 },
    { field: "suburb",width:100 },
    { field: "Featured",width:100 },
    { field: "Premium",width:100 },
    { field: "SocialBST",width:100 },
    { field: "Bedrooms",width:100 },
    { field: "Bathrooms" ,width:100},
    { field: "Garage" ,width:100},
    { field: "Carport" ,width:100},
    { field: "off-streetcarpark",width:120 },
    { field: "Flooor Area" ,width:100},
    { field: "Land Area",width:100 },
    { field: "Year Build" ,width:100},
    { field: "NO.of Teanants" ,width:120},
    { field: "Available",width:100 },
    { field: "Title" ,width:150},
    { field: "Description",width:150 },
    { field: "Others" ,width:100},
    { field: "Features" ,width:100},
    { field: "Duration" ,width:100},
    { field: "Balconies" ,width:100},
    { field: "Toilets",width:100 },
    { field: "Aminities" ,width:100},
    { field: "ApplyLink" ,width:120},
    { field: "AssignTo" ,width:100},
    { field: "Txn Id",width:100 },
    { field: "Txn Date",width:100 },
    { field: "PropertyStatus",width:150 },
    { field: "CreatedDate" ,width:120},
    { field: "Status",width:100 },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRenderer: 'actionsCellRenderer',
      width: 200
    },
    
  ];

  this.rowData=[
    {sno:1,Agent: "For Emails Srikanth - For", Role: "agents", PropType: "residential", PropCategory: "Apartment",Address:"## Ash Street, Avondale,",Region:"Auckland",District:"Auckland City",Suburb:"Avondale",Featured:"Yes",Premium:"Yes",SocialIBST:"No",Bedrooms:0,Bathrooms:0,Garage:5,Carport:7,OffStreetcarpark:11,Carpark:"55",FloorArea:"0",LandArea:"0",YearBuild:"000",Nooftenats:"0",AvailableFrom:"12-08-2024",Title:"Landlord Test for Payment",Description:"Landlord Test for Payment",Others:" ",Features:"",Duration:"Week",Balconies:"0",Toilets:"0",Aminities:"",ApplyLink:"",AssignTo:"",TxnId:"",TxnAmount:"$0.00",TxnDate:"",TxnStatus:"",PropertyStatus:"Available",CreatedDate:"05-08-2024 18:20:46",Status:"yes"},
    {sno:2,Agent: "Pranay Rudra ", Role: "landlord", PropType: "residential", PropCategory: "Apartment",Address:"## Ash Street, Avondale,",Region:"Auckland",District:"Auckland City",Suburb:"Avondale",Featured:"Yes",Premium:"Yes",SocialIBST:"No",Bedrooms:0,Bathrooms:0,Garage:5,Carport:7,OffStreetcarpark:11,Carpark:"55",FloorArea:"0",LandArea:"0",YearBuild:"000",Nooftenats:"0",AvailableFrom:"12-08-2024",Title:"Landlord Test for Payment",Description:"Landlord Test for Payment",Others:" ",Features:"",Duration:"Week",Balconies:"0",Toilets:"0",Aminities:"",ApplyLink:"",AssignTo:"",TxnId:"",TxnAmount:"$0.00",TxnDate:"",TxnStatus:"",PropertyStatus:"Available",CreatedDate:"05-08-2024 18:20:46",Status:"yes"},
    {sno:3,Agent: "Bhushan", Role: "agents", PropType: "commercial", PropCategory: "Retail",Address:"## Ash Street, Avondale,",Region:"Auckland",District:"Auckland City",Suburb:"Avondale",Featured:"Yes",Premium:"Yes",SocialIBST:"No",Bedrooms:0,Bathrooms:0,Garage:5,Carport:7,OffStreetcarpark:11,Carpark:"55",FloorArea:"0",LandArea:"0",YearBuild:"000",Nooftenats:"0",AvailableFrom:"12-08-2024",Title:"Landlord Test for Payment",Description:"Landlord Test for Payment",Others:" ",Features:"",Duration:"Week",Balconies:"0",Toilets:"0",Aminities:"",ApplyLink:"",AssignTo:"",TxnId:"",TxnAmount:"$0.00",TxnDate:"",TxnStatus:"",PropertyStatus:"Available",CreatedDate:"05-08-2024 18:20:46",Status:"yes"},
    {sno:4,Agent: "For Emails Srikanth - For", Role: "agents", PropType: "residential", PropCategory: "Apartment",Address:"## Ash Street, Avondale,",Region:"Auckland",District:"Auckland City",Suburb:"Avondale",Featured:"Yes",Premium:"Yes",SocialIBST:"No",Bedrooms:0,Bathrooms:0,Garage:5,Carport:7,OffStreetcarpark:11,Carpark:"55",FloorArea:"0",LandArea:"0",YearBuild:"000",Nooftenats:"0",AvailableFrom:"12-08-2024",Title:"Landlord Test for Payment",Description:"Landlord Test for Payment",Others:" ",Features:"",Duration:"Week",Balconies:"0",Toilets:"0",Aminities:"",ApplyLink:"",AssignTo:"",TxnId:"",TxnAmount:"$0.00",TxnDate:"",TxnStatus:"",PropertyStatus:"Available",CreatedDate:"05-08-2024 18:20:46",Status:"yes"},
    {sno:5,Agent: "For Emails Srikanth - For", Role: "agents", PropType: "residential", PropCategory: "Apartment",Address:"## Ash Street, Avondale,",Region:"Auckland",District:"Auckland City",Suburb:"Avondale",Featured:"Yes",Premium:"Yes",SocialIBST:"No",Bedrooms:0,Bathrooms:0,Garage:5,Carport:7,OffStreetcarpark:11,Carpark:"55",FloorArea:"0",LandArea:"0",YearBuild:"000",Nooftenats:"0",AvailableFrom:"12-08-2024",Title:"Landlord Test for Payment",Description:"Landlord Test for Payment",Others:" ",Features:"",Duration:"Week",Balconies:"0",Toilets:"0",Aminities:"",ApplyLink:"",AssignTo:"",TxnId:"",TxnAmount:"$0.00",TxnDate:"",TxnStatus:"",PropertyStatus:"Available",CreatedDate:"05-08-2024 18:20:46",Status:"yes"},

  ];

  this.frameworkComponents = {
    viewvisit: ViewVisitComponent
  };

}
}
