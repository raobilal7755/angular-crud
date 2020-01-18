import { InsertComponent } from './insert/insert.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeComponent } from './employe/employe.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'getdata',
    pathMatch:'full'
  },
  {
    path:'getdata',
    children:[
     {path:'',component:EmployeComponent},
     {path:'insert',component:InsertComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
