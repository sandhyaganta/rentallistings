import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { UsersComponent } from './users/users.component';
import { CompainesComponent } from './compaines/compaines.component';
import { PropertymanagersComponent } from './propertymanagers/propertymanagers.component';
import { ProfileComponent } from './profile/profile.component';
import { Home2Component } from './home2/home2.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomepageComponent},
    {path:'dash',component:DashboardComponent,children:[
        {path:'home1',component:HomeComponent},
        {path:'properties',component:PropertiesComponent},
        {path:'user',component:UsersComponent},
        {path:'compaines',component:CompainesComponent},
        {path:'pmanagers',component:PropertymanagersComponent},
        {path:'profile',component:ProfileComponent}
    ] },
    {path:'home2',component:Home2Component}
];
