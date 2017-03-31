import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent }  from './app.component';
import { UsersComponent }  from './users.component';
import { DeptComponent }  from './dept.component';
import { UserDetailsComponent }  from './userdetails.component';

const routes:Routes=[
  {path:'users',component:UsersComponent},
  {path:'department',component:DeptComponent},
   {path:'users/:id',component:UserDetailsComponent},
];
@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(routes)],
  declarations: [ AppComponent,UsersComponent,DeptComponent,UserDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
export class AppRoutingModule{}
export class routingComponents = [
      UsersComponent,DeptComponent,UserDetailsComponent
]
